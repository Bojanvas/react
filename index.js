var express = require('express');
var path = require('path');
var router = require('./routes/router.js');
var mongoose = require('mongoose');

var app = express();
mongoose.connect('mongodb://' + process.env.db_user + ':' + process.env.db_pass + '@ds135820.mlab.com:35820/bojanblog', function() {
    console.log('conected');
});
app.use(express.static(__dirname + "/public/"));
app.use('/', router);

var port = process.env.PORT || 3000;



app.listen(port, function() {
    console.log('listeing');
})