var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(__dirname + "/public/"));

var port = process.env.PORT || 3000;

app.get('*', function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
})


app.listen(port, function() {
    console.log('listeing');
})