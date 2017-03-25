var express = require('express');
var body = require('body-parser');
var path = require('path');
var fs = require('fs');
var formidable = require('formidable');
var nodemailer = require('nodemailer');
var Post = require('./posts.js');
require('dotenv').config();

var router = express.Router();

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    requireTLS: true,
    auth: {
        user: process.env.user,
        pass: process.env.pass
    },
    tls: {
        rejectUnauthorized: false
    }
})
router.use(body.json());
router.use(body.urlencoded({ extended: true }));
router.get('/post', function(req, res) {
    console.log(req.query.name)
    if (req.query.name == "mane") {
        res.sendFile(path.resolve(__dirname + '/../public/post.html'));
    }
})
router.get('/blogpost/', function(req, res) {
    Post.find({}, function(err, docs) {
        if (err) {
            throw err;
        } else {
            res.json(docs);
        }

    })
})
router.get('/onepost/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);
    Post.findOne({ _id: id }, function(err, docs) {
        if (err) {
            throw err;
        } else {
            res.json(docs);
        }
    })
})
router.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname + "/../public/index.html"));
})
router.put('/update', function(req, res) {
    var body = req.body;
    Post.findOne({ title: body.title }, function(err, doc) {
        if (err) {
            throw err;
        } else {
            doc.title = body.title;
            doc.url = body.url;
            doc.content = body.content;
            doc.save();
            console.log('updated');
            res.end();
        }
    })
})
router.post('/upload', function(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, filds, files) {

        fs.readFile(files.image.path, function(err, data) {
            var imageName = files.image.name;
            if (!imageName) {
                console.log('there was an error');
                res.redirect('/post');
                res.end();
            } else {
                var newPath = __dirname + '/../public/uploads/image/' + imageName;
                fs.writeFile(newPath, data, function(err) {
                    if (err) {
                        throw err;
                    } else {
                        res.send('img uploaded');
                    }
                })
            }
        })
    })

})
router.post('/delpost', function(req, res) {
    var id = req.body.data;
    Post.remove({
        _id: id
    }, function(err) {
        if (err) {
            throw err;
        } else
            res.redirect('/post');
        res.end();
    });
})
router.post('/blog', function(req, res) {
    var post = req.body;
    Post.create(post, function(err, res) {
        if (err) {
            throw err;
        } else {
            console.log('new post created')
            res.redirect('/blog');
            res.end();
        }
    })
})

router.post('/api/contact', function(req, res) {
    var person = req.body.data;
    if (person.message) {
        var mailOptions = {
            from: person.email,
            to: 'bojan87vasilevski@gmail.com',
            subject: 'Hello',
            text: "message from:" + person.name + "," + person.secondname + " :" + person.message,
        }
        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                return console.log(err)
            } else {
                console.log('message sent');
            }
        })
    }


})




module.exports = router;