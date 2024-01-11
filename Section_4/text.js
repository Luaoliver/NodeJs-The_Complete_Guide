// 41. MODULE INTRODUCTION
// Nesta seção será mostrado como acelerar e melhorar o desenvolvimento
// utilizando NodeJs e como depurar nossos aplicativos utlizando várias
// ferramentas a fim de entender melhor o que acontece por debaixo dos panos.

// --------------------

// 42. UNDERSTANDING NPM SCRIPTS
// Durante todo o desenvolvimento, para iniciar nosso aplicativo utizamos
// "node app.js", que é uma maneira válida de o fazer. Mas também há a
// possibilidade de definiri alguns scripts para facilitar e organizar isso.
// Para isso, utilizaremos um recurso que não foi utilizado até o momento, o
// npm. O npm é um gerenciador de pacotes do node, instalado junto ao nodejs.
// Podemos utilizar o npm para instalar pacotes adicionais, algo que faremos
// em breve. Outra função do npm é a de inicialização do projeto e adicionar
// alguns recursos extras.

// Para começar, digite no terminal o comando:
//      npm init
// Após isso, você deverá responder algumas perguntas, como o nome do seu pacote,
// você pode dar enter e ignorar todas as perguntas, pois elas serão respondidas
// de maneira padrão caso você não selecione uma resposta.
// Após isso, será criado um arquivo package.json, que possui um conteúdo
// similar aos objetos no js.
// As keys do package.json são sempre colocadas entre aspas, exceto números ou
// boleanos.

// Nesse arquivo de configuração você encontrará uma seção de scripts que possui
// valores padrão, como "test" mas você também pode adicionar seus prórpios
// scripts e executá-los. Para adicionar um novo script, você deve atribuir a
// ele um comando que possa ser executado, como:
//      "start": "node app.js"
// Agora, ao invés de iniciar o aplicativo com 'node app.js', você pode
// utilizar 'npm start'.

// 'Start" é um comando com palavra reservada, para utilizar comandos personalizados
// você deverá utilizar 'npm run'. Como por exemplo, caso crie um script:
//      "start-server": "node app.js"
// Você poderá utilizá-lo com 'npm run start-server'

// --------------------

// 43. INSTALLING #RD PARTY PACKAGES
// Com um projeto de node gerenciado, também há a possibilidade de fazer outras
// coisas: como instalar pacotes de terceiros.
// Quando você cria um projeto local, você tem seu código e o Core Node
// Packages, a partir disso é possível adicionar dependências de terceiros que
// podem te ajudar a analisar solicitações recebidas, validar entradas, entre
// outras coisas.
// Alguns pacotes que usaremos nós próximos módulos são o express e body-parser.
// Todos esses pacotes ficam disponíveis no npm repository. Um repositório de
// pacotes na nuvem onde os pacotes ficam ativos e você pode instalá-los e
// gerenciá-los via npm.

// Agora, instalaremos um pacote que nos auxilie ao rodar nossa aplicação. Da
// maneira que o fazemos atualmente (com node app.js), sempre que houver uma
// modificação, o app precisar ser reiniciado. Com esse pacote, esse trabalho
// será realizado automaticamente, bastando apenas salvar a modificação feita.
// Esse pacote se chama 'nodemon'. Para instalá-lo basta utilizar:
//      npm install nodemon
// È possível ler mais sobre a maioria dos pacotes disponíveis acessando o site
// npmjs.com, como https://www.npmjs.com/package/nodemon.

// Outra possibilidade é definir como um pacote será instalado. Estes pacotes
// podem ser divididos em Pacotes de Desenvolvimento e Pacote de Produção.
// O Pacote de Desenvolvimento é composto pelas extensões que o auxiliam no
// desenvolvimento do app. Enquanto o Pacote de Produção o
// o auxilia a rodar o app enquanto desenvolve.
// Isso não faz grande diferença, é uma informação que pode ser omitida, mas
// pode te ajudar a entender qual pacote será usado para qual motivo.
// Para Pacote de Produção, basta adicioná-lo com:
//      npm install nodemon --save
// Para pacotes de Desenvolvimento, basta:
//      npm install nodemon --save-dev
// Uma terceira opção seria:
//      npm install nodemon -g
// Que não instala no projeto, mas globalmente em sua máquina para ser utilizado
// em qualquer lugar.

// Após realizar esses comandos, haverá um novo aquivo, o package-lock.json e
// também uma nova seção, a 'devDepenencies'. Veja:
//      "devDependencies": {
//          "nodemon": "^3.0.2"
//      }
// O simbolo ^ define como o pacote deverá ser atualizado. Se você executar o
// npm install sem definir um pacote, este comando passará por todos os pacotes
// escolhendo automaticamente sua versão, podendo ser uma posterior, se disponível.
//

// Pacotes instalados nesta aula:
//      npm install nodemon --save-dev

// --------------------

// 44. Global Features vc Core Modules vc Thitd-Party Modules
// As últimas aulas continham conceitos importantes sobre recursos
// disponíveis do Node e como desbloqueá-los.

// Você pode basicamente diferenciar entre:

// Recursos globais: palavras-chaves como 'const' ou 'function', mas também
// alguns objetos globais como 'process'

// Módulos principais: exemplos seriam o modulo do sistema de arquivos 'fs', 
// o módulo de caminho 'path' ou o módulo
// Http 'http'

// Módulos de terceiros: instalados via npm install, você pode adicionar
// qualquer tipo de recurso ao seu aplicativo.

// Os recurso globais estão sempre disponíveis, você não precisa importá-los
// para os arquivos onde deseja utilizar.

// Os modulos principais do Node não precisam ser instalados via npm, mas é
// necessário importá-los. Exemplo:
//      const fs = requer('fs');

// Os módulos de terceiros precisam ser instalados via npm e importados.
// Exemplo:
// No terminal/prompt de comando
//      npm install --save express-session
// No arquivo de código
//      const sessions = require('express-session');  

// --------------------

// 45. Using Nodemon for Autorestarts

// Para utilizar o nodemon, fazendo com que o aplicativo atualize automaticamente
// basta modificar o comando start para utilizar nodemons, ao invés de node.
// Como era:
//      "start": "node app.js"
// Como deve ficar:
//      "start": "nodemon app.js"
// Por outo lado, ao contrário de "node app.js", você não pode executar
// "nodemon app.js" no terminal, pois é uma dependência que foi instalada
// apenas no projeto e não globalmente.

// --------------------

// 46. Global & Local npm Packages

// Nodemons foi adicionado como uma dependência local. As dependências locais
// possuem a vantagem de compartilhar projetos sem a pasta node_modules e
// apenas executar npm install para que ela seja criada. O que permite que
// apenas o código fonte seja compartilhado.

// O nodemons não funciona no terminal pois utilizamos apenas pacotes locais.
// Seria possível instalá-lo globalmente, mesmo que não seja necessário, mas
// bastaria executar:
//      npm install -g nodemon

// O sinalizador -g garante que o pacote seja adicionado como um pacote global
// que pode ser utilizado em qualquer lugar da sua máquina.

// --------------------

// 47. Understanding different Error Types

// Nesta aula vamos focar em corrigir erros. Precisamos entender como encontrar
// e corrigir erros em nosso código. Para isso, primeiro precisamos entender
// que há difernetes tipos de erros. Sendo eles:

// Syntax Errors: é um erro de digitação no código, é automaticamente
// lançado quando você tenta executar o projeto.

// Runtime Errors: são erros onde você tenta executar um código que quebra
// é executado.

// Logical Errors: são os mais dificéis, pois ele nunca mostra uma mensagem
// de erro, o aplicativo apenas não funciona da maneira que deveria e pode ser
// difícil encontrá-los.

// --------------------

// 48. Finding & Fixing Syntax Errors

// Os syntax errors são fáceis de corrigir, quando eles aparecem, rapidamente
// obtemos ajuda da IDE para correção

// --------------------

// 49. Dealing with Runtime Errors

// Esta categoria é sobre erros de tempo de execução. As mensagens de erros são
// muito úteis, é importante que você as leia e interprete. Geralmente, o topo
// da mensagem de erro costuma ser mais significativo e esclarecerdor.

// Estes erros costumam apontar para as rotas defeituosas e indicar onde está
// o erro. Porém, deve-se procurar no código o lugar exato, pois a linha não é
// informada.

// Estes erros são chamados assim pois eles não aparecem até que você execute
// o aplicativo.

// --------------------

// 50. Logical Errors

// Este é geralmente o erro mais difícil de corrigir pois ele não causa uma
// mensagem de erro, seu aplicativo apenas se comportará da maneira errada.
// Para corrigi-los, você pode utilizar a ajuda do debugger. Para acessar,
// você deve ir em Run -> Start Debugging, após isso, você deve escolher um
// ambiente, neste caso usaremos o nodeJs. Iniciando, você verá uma barra
// vermelha/laranja no inferior da tela, o que significa que você está em
// modo debugger. Você também pode verificar o debug console, que mostrará
// que você está conectado.

// Isso te permite analisar o seu código enquanto ele está funcionando, mas
// para isso, você precisa definir alguns break points.
// Quando a execução for pausada, você pode verificar os valores do seu
// código passando o mouse em cima, ou verificar em Run&Debug. lá você
// encontra as principais variáveis do seu código.

// Você não apenas poderá ver variáveis locais, como também variáveis
// bloqueadas. Também é possível selecionar uma variável em particular para
// monitorar enquanto o código é executado.

// Também é possível visualizar a pilha de chamados, ela mostra por onde o
// processo passou.

// --------------------

// 51. Using the Debugger

// Você pode utilizar o debugger para passar seu código passo a passo, o node
// registra linha após linha, mas você também deve ter atenção com os break
// points nos lugares corretos em que deseja analisar

// --------------------

// 52. Restarting the debugger automatically after editing our App

// Uma coisa importante de se ter em mente é que você pode imprimir os valores
// de variáveis no terminal, o que for digitado lá não afeta o seu código.

// Quando se utiliza o debugger e salva um arquivo, ele não será reiniciado
// mas, utilizando o nodemon, é possível fazer com que isso aconteça.
// Para adiciona, vá em Run -> Add Configuration... -> NodeJs, isso criará um
// arquivo launch.json, um arquivo de inicialização. Nesse arquivo é possível
// configurar o debugger do projeto e como ele se comporta.
// Você pode utilizar configuração de exemplo ou criar uma.
// Para garantir que o nodemon seja utilizado, você deve definir o runtimeExecutable
// no arquivo.
// Nesse arquivo você também pode definir que ele sempre será iniciado com o
// app.js.
// Também é possível alterar o console no qual as coisas são registradas, e
// definir que apareçam no terminal integrado.

// Porém, ao adicionar o nodemon, o launch.json irá procurá-lo globalmente,
// desta forma, você deve instalá-lo utilizando:
//      sudo npm install nodemon -g

// --------------------

// 53. Debugging Node.js in VSCode

// Artigo útil para se aprofundar nos estudos do debugger:
//  https://code.visualstudio.com/docs/nodejs/nodejs-debugging
