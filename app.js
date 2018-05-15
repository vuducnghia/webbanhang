var express = require('express');
var path = require('path');
var app = express();

// app.set('view engine', 'html');
// app.set('views',__dirname+'/client')
app.use(express.static(path.join(__dirname, './client')));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/index.html')
})



module.exports = app