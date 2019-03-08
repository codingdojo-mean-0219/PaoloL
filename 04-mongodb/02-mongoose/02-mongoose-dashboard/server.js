const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const app = express();


// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));

// Tell server where views are and what templating engine I'm using
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Create connection to database
const connection = mongoose.connect("mongodb://localhost/dog_db", { useNewUrlParser: true });

// Create dog schema and attach it as a model to our database
const DogSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

// Mongoose automatically looks for the plural version of your model name, so a Dog model in Mongoose looks for 'dogs' in Mongo.
const Dog = mongoose.model('Dog', DogSchema);

// Routes go here!
app.get('/', function(request, response){
  Dog.find({}, function(err, results){
    if (err) { console.log(err); }
    response.render('index', { dogs: results });
  });
});

// Create
app.post('/', function(request, response){
  // Create a new dog!
  Dog.create(request.body, function(err, result){
    if (err) { console.log(err); }
    response.redirect('/')
  });
});

// New
app.get('/new', function(request, response){
  response.render('new');
});

// Show
app.get('/:id', function(request, response){
  Dog.find({ _id: request.params.id }, function(err, response) {
    if (err) { console.log(err); }
    response.render('show', { dog: response[0] });
  });
});

app.get('/:id/edit/', function(request, response){
  Dog.find({ _id: request.params.id }, function(err, response) {
    if (err) { console.log(err); }
    response.render('edit', { dog: response[0] });
  })
});

// Update
app.post('/:id', function(request, response){
  Dog.update({ _id: request.params.id }, request.body, function(err, result){
    if (err) { console.log(err); }
    response.redirect('/');
  });
});

// Delete
app.post('/:id/delete', function(request, response){
  Dog.remove({ _id: request.params.id }, function(err, result){
    if (err) { console.log(err); }
    response.redirect('/');
  });
});


app.listen(port, function(){
  console.log("Running on ", port);
});