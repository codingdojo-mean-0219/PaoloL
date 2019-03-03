const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(express.static(__dirname + "/static"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (request, response) {
    response.render('index')
});

app.post('/result', (request, response) => {
    response.render('result', {result: request.body});
})

app.get('/planets/:page', function(request, response){
	
	var page = request.params.page != 0 ? `https://swapi.co/api/planets/?page=${request.params.page}` : 'https://swapi.co/api/planets/';

    axios.get(page)
    .then(data => { 
        response.json(data.data);
    })
    .catch(error => {
        console.log(error);
        response.json(error);
    })
});

app.get('/people/:page', function(request, response){
	
	var page = request.params.page != 0 ? `https://swapi.co/api/people/?page=${request.params.page}` : 'https://swapi.co/api/people/';

    axios.get(page)
    .then(data => { 

        response.json(data.data);
    })
    .catch(error => {
        console.log(error);
        response.json(error);
    })
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));