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
