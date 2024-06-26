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

// --------------------

// 67. Adding a 404 Error Page

// Quando acessamos uma url não listada em nosso aplicativo, nos é retornado
// um erro genérico, nosso objetivo aqui é criar uma página de erro que retrne
// um 404 de maneira mais agradável.


// Para isso, a maneira fácil é adicionar um catch ao final do aplicativo.

// Uma informação interessante é a possibilidade de encadear todas as
// solicitações uma atrás da outra, sendo o "send" o ultimo.

// --------------------

// 68. Filtering Paths

// Algumas rotas podem ter o caminho inicial em comum, como também a mesma rota
// pode se repetir se o método utilizado for diferente.
// Porem, há uma informação importante, se houver rotas que iniciem com o
// mesmo segmento, nós podemos filtrá-las através deste segmento.
// Como por exemplo, imagine as seguintes rotas existentes no admin.js:
//      '/admin/add-product'
//      '/admin/product'
// Podemos chamá-las no arquivo app.js como:
//       app.use('/admin', adminRoutes)
// Fazendo isso, exclui-se a necessidade de que as duas rotas tenham o segnmento
// podendo ser refatoradas para:
//      '/add-product'
//      '/product'
// Desta maneira, as rotas ainda serão acessadas pelo segmento admin, mas
// não há a necessidade de repetir essa informação.

// --------------------

// 69. Creating HTML Pages

// Até o momento utilizamos sempre um html fictício, para contornar isso
// criaremos arquivos html reais.
// Começamos criando uma nova pasta chamada views, poderiamos nomeá-la com
// qualquer nome, mas escolhemos este pois lentamente migraremos nosso
// código para o modelo MVC.
// Esta pasta será utlizada para gerenciar as visualizações, tudo aquilo que
// o usuário vê.

// Futuramente usaremos conceitos de mecanismos de modelagem para adicionar
// conteúdos dinamicamente aos arquivos html.

// Para iniciar um aquivo html, você pode digitar "html" e automaticamente
// será indicado "html:5" como opção, basta selecionar que seu arquivo será 
// automaticamente com o esqueleto básico.

// <ul> e <li> são responsáveis por adicionar uma lista não ordenada de itens.

// --------------------

// 70. Serving HTML Pages

// O objetivo desta aula é servir os arquivos html pois na última aula apenas
// adicionamos os arquivos html, sem modificar os arquivos js.

// Vamos começar por shop.js, ao invés de enviar um html falso, vamos enviar um
// arquivo com sendFile.

// Para construir um caminho para um diretório, podemos utilizar uma feature
// fornecida pelo nodejs: path.
// Para utilizá-lo, você pode fazer: path.join()
// Join produz um caminho no final. Ele basicamente constroi um caminho
// concatenando segmentos e o retorna.

// O argumento passado para join será "__dirname", essa é uma variável global
// que simplesmente mantém o caminho absoluto em nosso sistema operacional para
// a nossa pasta do projeto. Sendo assim, após ele basta adicionar uma vírgula
// e em seguida adicionar seus arquivos.

// A variável __dirname apontará diretamente para a pasta em que ela está
// presente. E para resolver esse problema, podemos adicionar o caminho '../'
// isso fará com que ele retorn uma pasta atrás e busque pela pasta citada e
// em seguida pelo arquivo. Concatenando tudo que foi adicionado.

// --------------------

// 71. Returning a 404 page

// Aqui vamos adicionar um retorno 404 seguindo o mesmo padrão de arquivos
// que temos feito. Porém, nesse momento só será modificado a pasta de views.

// Para chamar um arquivo diretamente sem chamar uma rota, podemos utilizar
// o mesmo padrão de res.status(), porém, chamaremos agora o sendFile em
// seguida, que é a mesma função que está sendo utilizada nos arquivos de rota.
// Dentro do sendFile, chame path.join e indique o caminho do arquivo que
// deseja utilizar.

// --------------------

// 72. A Hint!

// Na próxima aula, escreveremos este código:

// module.exports = path.dirname(process.mainModule.filename);
// (Eu explico por que escrevemos esse código na próxima aula, quando o 
// escrevermos!)

// O importante é que você receba um aviso de descontinuação para esse código
// - nesse caso, você pode simplesmente mudar para este código:

// module.exports = path.dirname(require.main.filename);
// Bem direto :)

// --------------------

// 73. Using a Helper Function For Navigation

// Antes de trabalharmos com estilo, é interessante entender como navegamos até
// a pasta raiz, usando o exemplo de:
//      res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))

// Para começar, você pode utlizar '..' ao invés de '../', isso seria
// preferível pois funcionaria tanto no mac quanto no Windows, pois desta 
// maneira não assumimos o separador que estamos utilizando na construção
// do caminho.

// Porém, além disso, há uma maneira muito melhor para especificar esses
// caminhos. Podemos obter o diretório através de uma função auxiliar, para
// isso vamos adicioná-la em util/path. Não importa que seu nome conflite
// com o universal pois o importaremos de maneira diferente.
// Dentro desse arquivo utilizaremos uma função path.dirname, que retorna o
// nome do diretório de um caminho. Ou seja, basta descobrir qual arquivo
// queremos saber o nome de diretório.

// Nisso, podemos utilizar uma variável de processo global, que está disponível
// em todos os arquivos e não precisa ser importada. Com isso você terá uma
// propriedade de módulo principal. Isso se refere ao módulo inicial do seu
// projeto, a raiz dele.

// Após criado o arquivo, vamos importá-lo em todas as rotas. Você ainda pode
// utilizar a abordagem antiga, mas essa também é uma maneira que funciona,
// além de ser mais limpa e que deve funcionar em todos os sistemas operacionais.

// --------------------

// 74. Styling our Pages

// Apesar de este não ser um curso sobre css, é muito importante saber como
// servir o css em um aplicativo node, porque normalmente você terá que lidar
// com isso.

// Começamos criando uma tag <style> no <head> e dentro dela. Todas as tags
// presentes no <body> devem receber uma classe para que possam ser estilizadas.


// As classe são referenciadas por um '.'.

// --------------------

// 75. Serving Files Statically

// após definir os estilos, um problema que encontramos é que todos estão
// presentes nos arquivos html e gostariamos de deixá-los mais limpo.
// Nesta aula vamos ver teoricamente como podemos mudar o nosso css para
// arquivos dinâmicos.

// Normalmente, você teria os arquivos css em algum lugar e apontaria para
// eles quando o aplicativo for veiculado.
// Sendo assim, você pode criar uma nova subpasta e nomeá-la como quiser, mas
// a convenção é chamá-la de public, pois a intenção é demonstrar que ali
// dentro possui um conteúdo que estará sempre exposto de maneira pública e
// não necessita de permissão para acessá-lo.

// em geral, não há a possibilidade de alguém de fora acessar os arquivos do
// seu aplicativo, mas nesse caso gostariamos de abrir uma exceção porque
// no fim das contas, queremos ter um link que é apontado para nosso css.

// Para utilizar o arquivo css na nossa aplicação, precisamos de um recurso
// que o expressjs nos oferece, precisamos ser capazes de fornecer arquivos
// estaticamente que sejam enviados diretamente ao sistema de arquivos.
// Para isso, registramos um novo middleware utilizando express.static
// que é um método interno utilizado para servir arquivos estáticos.
// Niddo devemos passar pela pasta que queremos conceder o acesso a leitura.
// Com isso, o usuário poderá acessar a pasta public e no html deve-se omitir
// a exitência da pasta public e indicar apenas o restante do caminho.

// Desta maneira, toda solicitação será enviada para a pasta pública e todo
// caminho será buscado lá.

// A propósito, você pode registrar várias pastas estáticas e elas irão
// canalizar a solicitação por todas elas até que encontre o arquivo.

// --------------------

// 76. Wrap Up

// What is Express.js?
// O Express é um framework do NodeJs, um pacote com utilidades que podem
// facilitar a construção da sua aplicação. Além disso, fornece um conjunto
// de regras que ditam como o app pode ser organizado. Também é altamente
// extensível, permitindo que outros pacotes se conecte a ele.

// Middleware, next() and res()
// O Express depende muito das funções chamadas middleware, que podem ser
// chamadas facilmente utilizando um use(). Essas funções são capazes de lidar
// com uma solicitação e devem chamar next() para que a solicitação seja
// encaminhada para a próxima função ou para que envie uma resposta.

// Routing
// É possível filtrar solicitações e métodos.

// Serve Files
// Não te limita a servir dummy text como resposta, é possível enviar files()
// para os usuários. Caso uma solicitação seja feita diretamente a um arquivo,
// você poderá ativar a veiculação estática para esses aerquivos via 
// express.static()

// --------------------

// 77. Useful Resources & Links

// Useful resources:
// Express.js Official Docs:
// https://expressjs.com/en/starter/installing.html
