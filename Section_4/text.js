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
