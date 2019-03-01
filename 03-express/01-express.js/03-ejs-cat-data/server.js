const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function (request, response) {
    console.log(request);

    response.render('index')
});

app.get('/cats', function (request, response) {
    console.log(request);

    response.render('cats')
});


app.get('/moe',function(request,response){
    var cat_details={name: "Moe",picture:"images/cat1.jpg",kind:"I'm a lion",food:["Antelope","Zebra", "Bufallo", "Uncle Scar"]};
    response.render('details',{cat:cat_details});
})
app.get('/larry',function(request,response){
    var cat_details={name: "Larry",picture:"images/cat2.jpg",kind:"I'm a Black Panther",food:["Antelope","Wild Pig", "Killmonger", "M'Baku" ]};
    response.render('details',{cat:cat_details});
})
app.get('/curly',function(request,response){
    var cat_details={name: "Curly",picture:"images/cat3.jpg",kind:"I'm a leopard",food:["Gazelle","Impala", "Monkeys", "Cohorts"]};
    response.render('details',{cat:cat_details});
})

app.use(express.static(__dirname + "/static"));
app.listen(port, () => console.log(`Express server listening on port ${port}`));