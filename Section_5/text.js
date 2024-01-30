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

// --------------------

// 62. Express.js - Looking Behind the Scenes

// Aqui está o código aberto do Express: https://github.com/expressjs/express
// Neste repositório, você encontrará um arquivo response.js na pasta lib,
// neste arquivo há muito código. É uma maneira de entender o que as coisas
// fazem por baixo dos panos
// O prórpio express é responsável por fazer a verificação do tipo caso você
// não o atribua, desta maneira ele define uma validação padrão que dirá qual
// tipo de dado recebido.

// Não há necessidade de estudar todo o código do Express, ele foi feito para
// facilitar o processo de desenvolvimento, mas visitá-lo algumas vezes pode
// te ajudar.

// Outra coisa interessante é que ele nos permite diminuir o código que define
// nosso server. Substituindo isso:
//      const server = http.createServer(app);
//      server.listen(3000);
// Por isso:
//      app.listen(3000)

// --------------------

// 63. Handling Different Routes

// Para deixar nosso aplicativo mais interessante, gostaríamos de poder lidar
// com rotas. Para isso, inciaremos removendo nosso middleware fictício.

// Há várias maneiras diferentes de utilizar a funçaõ 'use'.
// Uma dessas maneira é: você tem um primeiro argumento opcional, que é um
// caminho; Temos um retorno de chamada, basicamente é a função que deve ser
// executada; E por último, podemos ter mais um retorno de chamada, que poderá
// conter vários retornos.

// Toda rota deve começar com uma barra ('/')

// --------------------

// 64. Parsing Incoming Requests

// Nesta aula vamos entender como podemos trabalhar com solicitações recebidas
// e como podemos extrair dados.

// Se você não utiliza o terceiro argumento do middleware, você pode omiti-lo.

// A função redirect é útil pois você não precisa definir manualmente o status
// e cabeçalho.

// A solicitação nos fornece req.body por padrão, porém o corpo da requisição
// não é analisado.
// Para que a solicitação seja analisada, adicionaremos um analisador, sendo
// ele um novo middleware juntamente com um novo pacote de terceitos, que
// pode ser instalado com:
//      npm install --save body-parser
// Anteriormente o body-parser já foi incluído por padrão no express.Js, porém
// acabou sendo removido e adicionado novamente. A maneira recomendada de
// utilizar é instalando o pacote de terceiros, então o faça. Isso porque caso
// seja removido do Express.js novamente, o código continuará a funcionar.
// Para utilizá-lo basta importar com:
//      const bodyParser = require('body-parser')
// E então:
//      app.use(bodyParser.urlencoded());
// Essa é uma função que você precisa executar e pode passar opções para
// configurá-la, mas não há a necessidade de fazer isso neste momento pois
// basicamente estamos registrando um middleware. Então no final, essa função
// apenas produz uma nova função de middleware.

// Isso não analisa todos os corpos possíveis, mas apenas corpos como o que
// estamos recebendo, aqueles enviados por um formulário.

// --------------------

// 65. Limiting Moddleware Execution to POST Requests

// Podemos analisar o corpo das situações com o bodyParser.

// Ao invés de utilizar o app.use podemos também utilizar o app.get, esse
// método é bastante parecido com o app.use, sua sintaxe é similar, porém ele
// só é utilizado para solicitações get.
// App.get nos permite filtrar solicitações de recebimento.
// App.post pode filtrar solicitações de entrada.

// Essas são maneiras de utilizar funções middleware diferente do uso que
// funcionará com todos os métodos http.

// além deles, também temos os já conhecidos delete, patch e put. Mas estes não
// podem ser utilizados em um documento html padrão.

// --------------------

// 66. Using Express Router

// Este módulo é de extrema importância pois todos os outros módulos do curso
// se basearão neste.

// Em um aplicativo pequeno como o nosso, a divisão de arquivos não se torna
// tão relevante, mas a medida que ele vai crescendo se torna necessário
// pensar maneiras de dividir seu conteúdo em arquivos menores.

// Pensando nisso, o express.js oferece uma maneira muito boa de terceirizar o
// roteamento para outrso arquivos.
// Para isso, devemos alterar um pouco a estrutura de pastas.
// Primeiramente adicionamos uma pasta routes e dentro dela será armazenado
// todas as rotas que o aplicativo possui.
// A primeira pasta a se criar é admin.js, porque esse deve ser o caminho que
// lida com a criação de produtos no app que estamos criando.
// Outro arquivo adicionado será o shop.js, que basicamente conterá tudo aquilo
// que o usuário pode visualizar.

// A rota de adicionar produto e produto devem entrar no arquivo route.js pois
// são rotas administrador. Enquanto a rota geral deve entrar em shop.js para
// que os usuários possam visualizar na página inicial.

// Um recurso oferecido pelo Express.js para auxiliar nisso é o Router, ele
// se comporta como um mini aplicativo expresso vinculado a outro aplicativo
// expresso ou conectável .

// O Router sozinho não faz muita coisa, mas ele pode ser utilizado para
// registrar as coisas.

// Agora, ao invés de utilizar app.get, poderemos utilizar router.get.

// Para utilizar as rotas criadas em outro arquivo basta importá-las, como
// por exemplo:
//      const adminRoutes = require('./routes/admin')

// A ordem com que você chama as rotas no arquivo principal importa, preste
// atenção nisso.

// Após adicionar as rotas em seus devidos arquivos e atribuir seus respectivas
// metodos http, ao importar no arquivo principal, não é relevante a ordem que
// você os adiciona, pois cada método fará uma correspondência exatam àquilo
// que ele deve fazer.

// Lembre-se, as rotas só funcionam se forem configuradas, rotas não configuradas
// não podem ser acessadas.
