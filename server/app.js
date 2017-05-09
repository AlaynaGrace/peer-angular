var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./modules/index.js');
var mongoose = require('mongoose');

var port = 4567;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/',index);


//testing mongo
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/randoDb');

var songAndFoodSchema = new Schema({
  song: String,
  food: String
});

var thing = mongoose.model('things', songAndFoodSchema);

app.listen(port, function(){
  console.log('server up on', port);
});

// var testArr = [];

app.get('/test',function(req,res){
  thing.find({},function(err,results){
    if (err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('results ->', results);
      res.send(results);
    }
  });
  // res.send(testArr);
});

app.post('/test', function(req,res){
  var newThing = new thing( req.body );
  console.log(req.body);
  newThing.save(function(err){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    else{
      console.log('New user created');
      res.sendStatus(201);
    }
  });
});
