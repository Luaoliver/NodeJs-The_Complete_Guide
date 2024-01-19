const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware')
    next() // Isso permite que a requisição continue para o próximo middleware
})
// use nos permite adicionar uma nova função middleware
// Quando você passa uma função para ele, essa função será executada a cada
// solicitação recebida.
// Essa função deve receber três argumentos: a request, a response e o próximo
// argumento. Esses argumentos podem receber qualquer nome, o importante é o
// papel que eles desempenham.
// Req e Res atuam com o comportamento padrão, enquanto o next na verdade atua
// como uma função que deve garantir que a solicitação passe para o próximo
// middleware.

app.use((req, res, next) => {
    console.log('In another middleware')
    res.send('')
})
// Quando você adiciona um segundo, é necessário informar que deve pular para
// o próximo quando o primeiro for executado, utilizando next.

const server = http.createServer(app);

server.listen(3000);