// Section 10: SQL Introduction

// 136. Module Introduction

// Storing Data in Databases.
// Storing Application Data Correctly.

// Armazenar algo em arquivos é algo que definitivamente não fariamos em um aplicativo
// real (ou ao meenos não deveriamos).

// In this module we will see differente kinds of database (SQL vs NoSQL).
// How to use a SQL in a Node.js App.

// --------------------

// 137. Choosing a Database

// Antes de escolhermos qual o Bd mais apropriado para o projeto, precisamos entender a
// diferença entre eles.
// No fim, o objetivo é o mesmo: armazenar dados e torná-los facilmente disponíveis para
// que possamos ter uma maneira fácil e eficiente de acessar.

// Goal: Store Data and Make it Easily Accessible -> Use Database: Quicker Access than
// with a File.

// Podemos optar por um banco de dados baseado em SQL, o MtSQL é um exemplo de mecanismo
// de bd que se pode utilizar nesses casos.
// Ou também um NoSQL, onde temos o mongodb como uma das alternativas mais conhecidas.

// Então, o que é SQL?

// O SQL pensa em tabelas com campos e colunas. Um banco de dados baseado em SQL te
// permite relacionar tabelas diferentes. Por exemplo, um pedido pode ser simplesmente
// descrito como uma conexão de um usuário com um produto, pois um usuário pode
// solicitar produtos diferentes e um produto pode ser ordenado por vários usuários.
// E basicamente, essa relação só podem ser feitas devido a utilização do SQL.

// Uma de suas maiores caracteristicas é possui um esquema de dados forte, de modo que
// para cada tabela definimos claramente como os dados devem aparecer e que tipo de
// dado cada campo armazena, para que tenhamos um esquema forte e estritamente
// definido. Essa definição de como os dados devem parecer é uma coisa essencial em
// um Banco de dados SQL.

// Outra característica principal é a relação entre nossos dados. Relacionamos nossas
// tabelas com basicamente três tipos de relação.
// - 1 para 1
// - 1 para n
// - n para n

// SQL - Structured Query Language (Linguagem de Consulta Estruturada).
// Consultas são simplesmente comandos que utilizamos para interagir com o bd. No SQL
// uma consulta se parece com isso:
//      SELECT * FROM users WHERE age > 28
// Sendo SELECT;FROM;WHERE as nossas SQL Keywords/Syntax.
// E o restante sendo os atributos e condições.
