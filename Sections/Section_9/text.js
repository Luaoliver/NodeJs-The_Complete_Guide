// Section 09: Dynamic Routes & Advanced Models

// 116. Module Introduction

// Passing and Using Dynamic Data.
// Passing Route Params.
// Using Query Params.
// Enhance our Models.

// --------------------

// 117. Preparations

// --------------------

// 118. Applied Changes

// What changed in the attached files?

// Basically, a mobile navigation (for smaller/ mobile screens) was added.
// Besides that, only minor things were fixed.

// --------------------

// 119. Adding the Product ID to the Path

// --------------------

// 120. Extracting Dynamic Params

// Quando você passa os ':' o node vai entender que aquilo se trata de um dado que
// será passado e não uma rota absoluta.

// O nome que você utiliza na rota deve ser o mesmo nome que você utiliza para
// extrair o dado.

// --------------------

// 121. Loading Product Detail Data

// --------------------

// 122. Rendering the Product Detail View

// --------------------

// 123. Passing Data with POST Requests

// Na aula anterior aprendemos a como buscar informações de um produto através da url.
// Aqui, temos um problema semelhante ao adicionar um produto no carrinho.

// --------------------

// 124. Adding a Cart Model

// Nesta, aula, para criar o carrinho utilizaremos uma abordagem diferente, sem a
// utilização do constructor, mas sim com a criação de um método estático.

// --------------------

// 125. Using Query Params

// Nesse momento vamos nos concentrar na edição de um produto.

// Caso tenha que passar algum parâmetro adicional (ou parâmetro de consulta) na url,
// esse parâmetro de consulta pode ser adicionado a qualquer URL adicionando um '?'
// e em seguida um par de valores-chave, separados por um sinal de igual. Como:
//      '?edit=true'

// Você também pode ter vários parâmetro de consulta separando-os por um '&'. Como:
//      '?edit=true&title=newTitle'

// Esses parâmetro são chamados de dados opcionais. O caminho é determinado pela
// parte anterior ao ponto de interrogação.

// Ou seja, adicionar parâmetros a uma rota, não vai afetar a rota original, as
// duas podem existir simultaneamente. Mas você sempre pode adicionar parâmetros de
// consulta em seus controladores.

// IMPORTANT: The extracted value always is a String! So "true" intead of true.

// --------------------

// 126. Pre-Populating the Edit Product Page with Data.

// Para preencher previamente o formulário de edição com as informações do produto,
// precisamos buscar o produto primeiro. Para isso, precisamos utilizar o model do
// nosso objeto, buscando através do id.

// Rota de acesso: http://localhost:3000/admin/edit-product/123245?edit=true

// --------------------

// 127. Linking to the Edit Page

// Aqui vamos garantir que podemos acessar a página de edição de produto através de
// uma rota.

// --------------------

// 128. Editing the Product Data

// Nesta aula vimos como modificar corretamente um produto já exixtente.

// --------------------

// 129. Adding the Produc-Delete Functionality

// --------------------

// 130. Deleting Cart Items

// --------------------

// 131. Displaying Cart Items on the Cart Page

// --------------------

// 132. Deleting Cart Items

// --------------------

// 133. Fixing a Delete Product Bug
