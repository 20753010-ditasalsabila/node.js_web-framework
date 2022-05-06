//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');

const PORT = 3500;
const app = express();

//set views file
app.set('views',path.join(__dirname, 'views'));
//set view engine
app.set('view engine', 'hbs');
//set folder public sebagai static folder untuk static file
app.use('/assets',express.static(__dirname + '/public'));

//route untuk homepage
app.get('/', (req, res) => {
    res.render('index');
});

//route untuk contact
app.get('/contact', (req, res) => {
    res.render('contact');
});

//route untuk about
app.get('/about', (req, res) => {
    res.render('about');
});

//server listening
app.listen(PORT, () => {
    console.log('Server is running at port 3500');
});