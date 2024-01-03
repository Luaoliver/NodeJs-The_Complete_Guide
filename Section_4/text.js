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
