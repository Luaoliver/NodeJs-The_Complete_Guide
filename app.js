const http = require('http');
const express = require('express');

const app = express();
// Isso inicializará um novo objeto.
// Isso também se torna um manipulador de solicitações válido

const server = http.createServer(app);

server.listen(3000);