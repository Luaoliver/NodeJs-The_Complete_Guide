// O NodeJs utiliza o SingleThread. Uma Thread é basicamente como um processo em seu SO.
// Ele é capaz de lidar com muitas solicitações, atendendo a todas.
// Para isso, ele utiliza o Event Loop, que é iniciado juntamente ao servidor. Ele é
// responsável por manipular retornos de chamada de eventos. Porém, ele só o faz em chamadas
// que possuem retorno rápido.
// Operações mais demoradas são tratadas através do Worker Pool, que também é gerado e
// gerenciado automaticamente pelo Node.
// O Worker Pool é responsável por todo o trabalho pesado. Quando ele acaba, ele envia o
// callback para o Event Loop para que seja finalizado.