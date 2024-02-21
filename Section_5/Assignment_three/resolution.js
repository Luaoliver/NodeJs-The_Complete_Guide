// 1. Para resolver o primeiro ponto, basta instalar o Express.js, recomenda-se
// que o faça como depêndencia de produção. Para isso, basta utilizar o
// comando:
//      npm install --save express
// Mas, antes disso, lembre-se de iniciar um projeto Node.js, utilizando o
// comando:
//      sudo apt-get install nodejs
// E logo em seguida, o npm, com o comando:
//      sudo apt install npm

// 2. Para isso, comecei criando uma pasta /util com um arquivo path que é
// uma função axiliar que nos direciona a raiz do nosso projeto e através
// dela podemos acessar outras pastas corretamente ao definir nossas
// rotas.

// Depois eu criei nossos arquivos html, sendo um main.html como a tela
// principal e um users.html sendo a outra tela.

// Após isso, eu criei um arquivo main para receber as nossas rotas.
// Nesse arquivo, declarei as rotas / e /users, apontando para o arquivo
// html que deveria ser consumido.

// Por fim, criei um app.js que sobre nosso servidor e consome as rotas
// declaradas anteriormente.