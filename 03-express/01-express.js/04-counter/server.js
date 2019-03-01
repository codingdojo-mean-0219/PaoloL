var express = require("express");

var app=express();
// this is the line that tells our server to use the "/static" folder for static content
var session = require('express-session');
app.use(session({
  secret: 'falalalalalalala',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
// new code:
app.get('/',function(req,response){
    if (!req.session.counter){
        req.session.counter=0;
    }
    req.session.counter+=1;
    response.render('index',{counter:req.session.counter});
})
app.get('/reset',function(req,response){
        req.session.counter=0;
    response.redirect('/');
})
app.get('/add',function(req,response){
    req.session.counter+=1;
response.redirect('/');
})

app.listen(8000,function(){
    console.log("listening on port 8000")
})