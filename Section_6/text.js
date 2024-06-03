// Section 6: Working with Dynamic Content & Adding Templates Engines

// 78. Module Introduction

// Neste modulo trabalharemos com aquilo que o usuário vê, para que possamos
// entregar mais valor a ele.
// até agora o que fizemos foi trabalhar com página HTML estáticas, mas isso
// raramente acontece em projetos reais.

// Em termos práticos, veremos como gerenciar dados sem a utilização de banco
// de dados, como renderizar conteúdos dinamicos nas Views, como utilizar
// mecanismos de modelagem

// --------------------

// 79. Sharing Data Across Rquests & Users

// Começamos modificando um pouco do estilo e adicionando marcação adicional
// ao projeto.

// Hoje nosso projeto trabalha com armazenamento de dados no console, nesse
// módulo vamos ver como salvar esses dados em constantes antes de entender
// como podemos utilizar um banco de dados em nosso projeto.
// Dessa maneira, nós iniciamos uma constante que possa receber os produtos
// dos quais queremos salvar e em seguida fazemos um push nela do que está
// sendo salvo. Como no exemplo:
//      products.push({ title: req.body.title });

// Mesmo que isso te dê a impressão de mudança, uma constante irá funcionar
// pois o que fazemos é apenas adicionar ou remover elementos dela, o que não
// afeta o objetto no geral.
// Também é necessário modificar a maneira como está sendo exportado e 
// importado. Pois agora nossa constante também deve ser exportada.

// --------------------

// 80. Templating Engines - An Overview

// Para adicionar conteúdo dinâmico em nossas páginas html, nós precisamos
// utilizar um mecanismo de modelagem. 

// Temos um HTMLish, que basicamente se trata de um arquivo que possui muito
// html porém com alguns "espaços em branco". Com a utilização do NodeJs e de
// um mecanismo de modelagem, podemos buscar esses espaços e transformá-los
// em um html real. O conteúdo utilizado é gerado dinamicamente no servidor
// através do mecanismo de modelagem.

// Por exemplo, com a ajuda do mecanismo de modelagem, você pode enviar uma
// lista ordenada com itens de lista para os dados que você possui no
// aplicativo express node e no final, você terá um resultado dinâmico, em
// tempo real e o arquivo gerado será enviado de volta aos usuários.
// O usuário nunca verá o modelo nem os espaços reservados, nada do que
// acontece no servidor, ele apenas obtem uma página html, que não é
// codificada por você e sim gerada automaticamente.

// Atualmente temos várias opções de mecanismos de modelagem, mas focaremos em
// três deles, sendo o EJS, o Pug (Jade) e Handlebars. Todos eles são conteúdos
// gratuitos mas que atuam de diferente maneiras.

// EJS <p><%= name %></p>
// Utiliza o HTML normal e JS simples nos seus modelos.

// Pug(Jade) p#{name}
// Utiliza o mínimo de HTML e uma linguagem de modelo personalizada.

// Handlebars <p>{{ name }}</p>
// Utiliza o HTML normal e uma linguagem de modelo personalizada.

// --------------------

// 81. Installing & Implementing Pug

// Para instalar todos os mecanismos você pode utilizar o seguinte comando:
//      npm install --save ejs pug express-handlebars
// Isso te permite instalar diversos pacotes de uma só vez.

// Esses pacotes não serão utilizados ao mesmo tempo, veremos um de cada vez,
// começando pelo mais exótico, o pug.

// app.set() nos permite definir valores globamelte em nosso aplicativo
// express que podem ser chaves ou itens de configuração que o express não
// entende. Eles são ignorados, mas podemos lê-los através de app.get().

// Para utilizar o pug, podemos apenas declarar:
//      app.set('view engine', 'pug');
// Vale lembrar que nem todos os mecanismos possuem esse suporte, mas no
// nosso caso é possível utilizá-lo assim.

// Agora, observe esse trecho:
//      app.set('view engine', 'pug');
//      app.set('views', 'views');
// O que ele faz é basicamente dizer que queremos compilar modelos dinâmicos
// com o mecanismo Pug e o caminho para onde encontrá-los.

// Também devemos adicionar um arquivo modelos para o pug, tendo sua extensão
// .pug para que funcione de maneira diferente do .html.

// Para que a nossa página seja capaz de ler o que foi adicionado no nosso
// arquivo .pug, devemos modificá-lo, removendo:
//      res.sendFile(path.join(rootDir, 'views', 'shop.html'))
// e adicionando:
//      res.render('shop')
// Não precisamos definir que shop é o arquivo .pug, pois no app.js já
// definimos o .pug como default.

// --------------------

// 82. Outputting Dynamic Content

// Até o momento, estamos processando o conteúdo de Shop, mas nenhum conteúdo
// dinâmico, que é exatamente o intuito desse módulo.
// Para fazer isso, devemos buscar os dados que estão sendo recebidos de
// de alguma maneira, podendo ser com:
//      const products = adminData.products
// E passá-lo para nosso render como um objeto.

// O pug nos permite iterar sobre um array utilizando a seguinte sintaxe:
//      each ProdutoArmazenado in Matriz

// --------------------

// 83. Oficial Pug Docs

// https://pugjs.org/api/getting-started.html

// --------------------

// 84. Converting HTML Files to Pug

// Nesta ual, iremos converter todos os arquivos html para arquivos no modelo
// pug.
// Para indicar uma classe no Pug, utilizamos o .classe, mas para utilizar um
// id, utilizamos #id ao final da construção. Exemplo:
//      input(type="text", name="title")#title

// --------------------

// 85. Adding a Layout

// O 'block' em um arquivo .pug, é utilizado para reservar um bloco onde você
// pode adicionar conteúdo dinâmico utilizando as palavras definidas após ele.
//

// --------------------

// 86. Finishing the Pug Template

//      class=(path === '/admin/add-product' ? 'active' : '')
// Funciona como uma validação, entede-se que se o caminho for igual ao
// referido, deve-se utilizar a classe active. O path se refere ao caminho
// da página.

// --------------------

// 87. Avoiding an Error

// Na próxima palestra daremos uma olhada em um mecanismo de visualização
// diferente: Handlebars.

// Devido a uma alteração temporária introduzida pelos autores da biblioteca
// certifique-se de executar:
//      npm install --save express-handlebars@3.0
// antes de começar a usar esse pacote.

// --------------------

// 88. Working with Handlebars

// Para usar o Handlebars, devemos começar modificando o sistema de exibição
// no app.js.
// Para isso, você precisa importar o Handlebars, pois isso não é feito
// automaticamente pelo express como em outros caso. Depois deve declará-lo
// e chamá-lo.

// A maneira como os dados são passados não muda de mecanismo para mecanismo.
// Sempre será feito da mesma maneira, ou seja, não há necessidade de modificar
// os arquivos .js

// --------------------

// 89. Converting our Project to Handlebars

// Nesta aula aprendemos como utilizar o Handlebars.

// Handlebars não aceita lógicas diretas dentro de seus arquivos, para isso,
// você deve adicioná-las em um arquivo .js e depois passá-las para o
// arquivo hbs.

// --------------------

// 90. Adding the Layout to Handlebars

// O Handlebars é compatível com layouts, mas funciona de uma maneira um pouco
// diferente do pug.
// No nosso app.js, você deve declarar a pasta principal onde seus layouts se
// encontrarão. Você também deve definir o layout default, que será nosso
// arquivo main-layout.hbs.

// O hbs não nos permite criar um bloco reservado, como fizemos no pug. Mas
// ele nos permite declarar {{{ }}} onde, dentro dela, será um espaço
// reservado.

// A maneira mais fácil de deixar os estilos dinâmicos, é adicionando um if
// para identificar a página e aplicar o estilo correto.

// --------------------

// 91. Working with EJS

// O EJS é o mecanismo que será utilizado no restante deste curso.
// Ele é um mecanismo como o pug, suportado imediatamente, sem a necessidade
// de instalar novos pacotes. Basta defini-lo como mecanismo de exibição.

// O ejs não suporta layouts, mas encontraremos uma solução para ter algum
// tipo de reutilização de blocos.

// --------------------

// 92. ?

// Uma nova aula foi adicionada ao curso na primeira seção. Sendo assim, o
// número de aulas foi alterado e noss próxima aula terá número 93.
