const express = require('express');
const hbs = require('hbs');
const port = process.env.port || 3000;
var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.get ('/', (req, res) => {
    // res.send('Helo Express');
    res.send({
        name: 'Elad',
        Likes:[
            'biking',
            'hohoho'
        ]
    });
});

app.get ('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });//('About page');
});

app.listen(port);

