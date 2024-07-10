// Section 07: The Model View Controller (MVC)

// 97. Module Introduction

// Neste módulo vamos aprender maneiras de estruturar nosso código. Como
// também alguns conceitos por trás disso.

// --------------------

// 98. What is the MVC?

// MVC trata-se de uma separação de preocupações que garantem que diferentes
// partes do seu código façam coisas diferentes e você saiba claramente qual
// qual a responsabilidade de cada parte.
// Corresponde a: Model, View e Controller.

// Models podem ser representados por objetos ou pedaços de códigos, são
// responsáveis por representar seus dados e permitir que você os utilize.
// Representam seus dados no código e te permite trabalhar com eles.
// Exemplos: save, fetch...

// Views são responsáveis pelo que os usuários veem no final, são os
// responsáveis por renderizar o conteúdo correto nos documentos html e
// enviá-los de volta ao usuário, para que sejam dissociados.

// Controller são o ponto de conexão entre Model e View, pois a View não deve
// se importar com a lógica do aplicativo e a Model não deve se preocupar
// com a visualização. O controller é quem lida com o salvamento de dados e
// processamento.
// Ele é o intermediário, onde contém a lógica.

// Routes são basicamente as coisas que definem o caminho para qual método
// http o código deve ser executado.

// A controller também pode ser dividida em lógica e funções middleware.

// --------------------

// 99. Adding controllers

// Para que nosso projeto de assemelhe ao padrão mvc, precisamos adicionar
// controllers a ele, atualmente tudo está misturado em nossos arquivos de
// rota.

// A maneira como roteamos não muda, ela deve permanecer a mesma.
// A lógica intermediária é exatamente o que contitnui a controller.
// A medida que o seu projeto vai crescendo, deixa de ser viável manter toda
// a lógica de resposta dentro do arquivo de rotas, pois isso tende a criar
// arquivos gigantes e difíceis de manter.
