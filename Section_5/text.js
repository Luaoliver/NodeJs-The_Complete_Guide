// 57. Module Introduction

// Neste módulo veremos o Express.js. Está é uma estrutura que pode ser
// instalada como um pacote de terceitos no projeto node.
// O express ajuda a terceirizar parte do trabalho de codificação, ele oferece
// um conjunto de regras, várias funções utilitárias, entre outras coisas que
// podem te ajudar a se concentrar no seu objetivo principal.

// --------------------

// 58. What is Express.js?

// Escrever toda a lógica do servidor é algo muito complexo, em geral queremos
// focar na lógica de negócio e não em pequenos detalhes de computação, para
// isso o node utiliza um framework para todo trabalho pesado.
// Um framework é basicamente um cojunto de funções auxiliares e ferramentas
// com as quais podemos trabalhar.

// Algumas alternativas ao ExpressJs são: Vanilla Node.js, Adonis.js, Koa,
// Sails.js, entre vários outros.

// Um ponto muito positivo do Express é que ele é altamente flexível, na verdade
// ele não oferece muitas opções prontas para uso, mas oferece uma maneira de
// criar seu aplicativo e trabalhar com suas funções de forma altamente
// extensível e, por este motivo, há diversos pacotes criado por terceiros
// para serem utilizados no Express sem a necessidade de muita configuração.

// --------------------

// 59. Installing Express.js

// Para instalar o Express.js bata executar:
//      npm install --save express
// *Indica que será uma dependência de produção.

// Uma vez instalado, você pode ver uma nova dependência no package.json.

// --------------------

// 60. Adding Middleware

// O Express atua através de middleware. Ter um middleware significa que uma
// solicitação recebida é canalizada automaticamente através de várias funções
// pelo express. Então, ao invés de ter apenas um manipulador, você pode
// conectar várias funções pelas quais a solicitação passará até você enviar
// uma resosta.
// Isso permite que você divida seu código em vários blocos ao invés de ter
// tudo agrupado.

// Este é um conceito que será utilizado nesta aula.

// --------------------

// 61. How Middleware Works

// Para que o middleware funcione, você precisa enviar uma resposta como (next)
// se não ele simplesmente morrerá e não passará para o próximo.

// Ao invés de utilizar o res.write, que vimos anteriormente. Utilizaremos
// res.send para o envio de resposta. Ele nos permite anexar um corpo do tipo
// any.
// Quando você adiciona res.send() no middleware, não há a necessidade de
// utilizar o next, pois o res.send() já é visto como uma resposta.
