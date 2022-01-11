const express = require('express');

const app = express();



app.get('/', function(req, res) {
    res.send('<h1>Hello World</h1>');
});

app.get('/greeting', function(req, res) {
    res.send('<h1>Howdy, stranger.</h1>');
});

app.get('/greeting/:name', function(req, res) {
    res.send(`<h1>Howdy, ${req.params.name}</h1>`);
});



app.listen(4000, function() {
    console.log('Listening on port 4000');
})