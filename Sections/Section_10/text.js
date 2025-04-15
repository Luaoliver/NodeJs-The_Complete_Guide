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

// --------------------

// 138. NoSQL Introduction

// O nome NoSQL simplesmente sugere que ele nao segue a abordagem que o SQL segue e 
// também utiliza uma linguagem de consulta diferente.

// No NoSQL também temos "tabelas", mas estas são chamadas de collections. Em cada
// collection, os dados são chamados de documents. Esses documents podem possuir
// valores diferentes entre si, isso é permitido no NoSQL.

// Nesse modelo nao temos relacionamento entre as tabelas, isso significa que em cada
// collection teremos dados duplicados, como um email. A vantagem disso é que ao
// recuperarmos dados, nós não precisaremos juntar várias tabelas, mas apenas buscar
// aquela que possui os dado que estamos interessados, o que pode ser muito mais
// rápido e eficiente.

// Em resumo, suas principais características são:
//    Não possuir um schema definido, ou seja, não necessita de uma estrutura definida
//    permitindo que vários objetos diferentes ocupem a mesma collection
//    Não há relação entre os dados. Você pode os relacionar duplicando informações.

// --------------------

// 139. Comapring SQL and NoSQL

// Temos basicamente dois tipos de escalabilidade, a horizontal e a vertical.
// Na escalabilidade horizontal, são adicionados novos servidores, enquanto na
// escalabilidade vertical, é adicionado mais capacidade de processamento.

// SQL
//    Data uses schemas
//    Relations!
//    Data is distributed across multiple tables
//    Horizontal scaling is difficult / impossivle
//    Vertical scaling is possible
//    Limitations for lots of (thousands) read & write queries per second
// Aqui você pode apenas tornar o seu servidor mais forte, mas isso pode ser muito
// difícil ou impossível e isso pode vir a ser um problema, considerando um caso em
// o sistema possua milhares de consultas sendo feitas por segundo, é possível que o
// SQL atinja seus limites e utilizar esse meio pode nao ser a melhor opção.

// NoSQL
//    Schema-less
//    No (or very few) relations
//    Data is typically merged / nested in a few collections
//    Both horizontal and vertical scaling is possible
// Este seria uma otima escolha considerando uma aplicação de alto rendimento,
// principalmente pensando em escalabilidade. Mas também considerando que nem todas
// as partes dos seus dados serão acessadas ao mesmo tempo.
