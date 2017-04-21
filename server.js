//require takes in 'express' the dependency as the argument
var express = require('express');

//Create our app
var app = express();

app.use(express.static('public'));

//start server
//listen takes in two arguments, the port and the function
app.listen(3000,function(){
  console.log('Express server is up on port 3000');
});
