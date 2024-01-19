const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware')
    next() // Isso permite que a requisição continue para o próximo middleware
})

app.use((req, res, next) => {
    console.log('In another middleware')
    res.send('<h1>Hello from express!</h1>')
})

app.listen(3000);
