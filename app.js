const http = require('http');

// 04
// Aqui eu posso importar as rotas que criamos. Como não se trata mais de um
// módulo global, é necessário adicionar o caminho correto. Você também pode
// omitir a extensão do arquivo
const routes = require('./routes')
// O './' indica que o arquivo está localizado na mesma pasta onde está sendo
// chamado.

const server = http.createServer(routes);

server.listen(3000);

// 05
// Desta maneira dividimos nosso código em dois arquivos, sendo um deles muito
// enxuto, rodando apenas o server

// 06
// Uma coisa importante sobre o sistema de módulos do nodeJs, o conteúdo do
// arquivo é armazenado em cache e não podemos editá-lo externamente,
// portanto, se de alguma forma definirmos rotas como um objeto e tentarmos
// adicionar um novo no arquivo 'routes.js', isso não manipularia o arquivo
// original. Essa modificação ficará registrada mas não será acessível de fora.
