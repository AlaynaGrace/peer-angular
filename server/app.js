var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./modules/index.js');

var port = 4567;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/',index);

app.listen(port, function(){
  console.log('server up on', port);
});

var testArr = [];

app.get('/test',function(req,res){
  res.send(testArr);
});

app.post('/test', function(req,res){
  console.log(req.body);
  // var splitReq = req.body.message.split(',');
  // console.log(splitReq);
  //
  // testArr.push({song:splitReq[0],food:splitReq[1]});
  testArr.push(req.body);
  res.send(201);
});
