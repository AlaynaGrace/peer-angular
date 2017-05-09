var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./modules/index.js');

var port = 4567;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/',index);

app.listen(port, function(){
  console.log('server up on', port);
});
