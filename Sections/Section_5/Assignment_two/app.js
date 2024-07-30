const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
    console.log('In the middleware')
    res.send('<p>The page one</p>')
})

app.use('/',(req, res, next) => {
    console.log('In another middleware')
    res.send('<p>The page two</p>')
})

app.listen(3000);
