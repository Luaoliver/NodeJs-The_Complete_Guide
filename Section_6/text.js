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
