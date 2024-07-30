// 1. Para resolver o primeiro ponto, basta instalar o Express.js, recomenda-se
// que o faça como depêndencia de produção. Para isso, basta utilizar o
// comando:
//      npm install --save express
// Mas, antes disso, lembre-se de iniciar um projeto Node.js, utilizando o
// comando:
//      sudo apt-get install nodejs
// E logo em seguida, o npm, com o comando:
//      sudo apt install npm

// 2. Para iniciar um projeto express, primeiro você deve importá-lo com:
//      const express = require('express');
// Em seguida, deve definir o app, como:
//      const app = express();
// Depois, para criar funções middleware, basta utilizar 'app.use(() => {})'
// e passar três argumentos, sendo a request, response, e o next.
// Uma função middleware tem acesso ao objeto de solicitação (req), o objeto
// de resposta (res) e a próxima função no ciclo de solicitação-resposta.
// A próxima função é comumente denotada por uma variável chamada next.

// 3. Para a instrução 3, bastou remover a utilização do next e adicionar 
// uma resposta para cada middleware com o res.send()
