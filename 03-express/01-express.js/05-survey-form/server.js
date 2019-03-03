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

app.post('/result',function(request,response) {
    console.log(request.body);
    var data={name: request.body.name,location:request.body.location,language:request.body.language,comment:request.body.comment};
    response.render('result',{data:data});
});

// app.use(express.static(__dirname + "/static"));
app.listen(port, () => console.log(`Express server listening on port ${port}`));