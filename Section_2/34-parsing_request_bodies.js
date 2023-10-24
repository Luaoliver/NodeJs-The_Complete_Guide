// Análise das solicitações recebidas e obtenção de dados que fazem
// parte da solicitação

// Como ter acesso aos dados inseridos?
// Os dados recebidos são enviados como um fluxo de dados

// Existe um conceito conectado: Streams & Buffers.

// Tomando a solicitação de entrada como exemplo, uma request.
// O fluxo é basicamente um processo contínuo, a solicitação é lida
// pelo Node em partes, teoricamente feito para que possamos trabalhar
// em blocos individuais sem precisar aguardar a leitura completa da
// solicitação.

// Para uma solicitação simples, como a que estamos trabalhando, isso
// não é necessário. Mas o Node lida assim com todas as solicitações
// pois não é possível saber o quão complexas e grande elas são.

// Para começar a trabalhar com os dados, é preciso adaptar o código,
// não é possível tentar arbitrariamente trabalhar com esses blocos.
// Ao invés de organizar esses blocos de entrada, você utiliza um buffer.

// Um buffer é como um ponto de ônibus. Os onibus estão sempre dirigindo,
// mas para que os usuários ou clientes possam trabalhar com eles (subir
// no ônibus e descer do ônibus) é necessário pontos de ônibus onde você
// pode rastrear o ônibus. Basicamente, isso é um buffer.
// Um buffer é simplesmente uma construção que permite armazenar vários
// pedaços e trabalhar com eles antes que eles sejam liberados.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method

    if(url === '/') {
        res.setHeader('Content-type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Enter Message</title><head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></form></body>')
        res.write('</html>')
        return res.end()
    }

    // Antes de enviar a resposta e de gravar no arquivo, queremos obter
    // os dados da solicitação.
    // Fazemos isso acessando a solicitação e registrando um ouvinte de
    // evento.
    if(url === '/message' && method === 'POST') {
        const body = []
        // Quando criamos um servidor, essa função é automatizamente
        // fornecida pelo Node.
        // Esse evento será acionado sempre que um novo bloco estiver
        // pronto para ser lido.
        // O primeiro argumento é o tipo de evento que queremos ouvir
        // O segundo arumento é a função que deve ser executada para
        // cada evento de dados.
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
            // com o push, estamos editando os valores da constantes body
            // isso é diferente de editar o objeto em si.
        })

        // Após isso, é necessário registrar o ouvinte evento final, que
        // será adicionado assim que a análise de dados for finalizada
        // Nessa função, podemos confiar que todos os pedaços foram lidos
        // e todos serão armazenados no corpo agora.
        // Pensando no conceito do ponto de onibus, temos vários pedaços
        // que agora precisamos trabalhar com eles, ter um lugar onde o
        // ônibus para e permite a interação.
        req.on('end', () => {
            // Buffer está disponível globalmente, disponibilizado pelo
            // NodeJs
            const parseBody = Buffer.concat(body).toString()
            // Em resumo, isso criará um novo Buffer e adicionará todos
            // os pedaços de dentro do body a ele.
            // toString o converte em uma string, isso funciona pois
            // sabemos que os dados recebidos serão texto. Se fosse um 
            // arquivo, deveriamos fazer algo diferente.

            console.log(parseBody)
            const message = parseBody.split('=')[1]
            // vai receber o segundo elemento, que está a direita do
            // sinal de igualdade.

            fs.writeFileSync('message.txt', message)
        })

        res.statusCode = 302
        res.setHeader('Location', '/')

        return res.end()
    }

    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first Page</title><head>')
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>')
    res.end()
});

server.listen(3000);

// Após realizar a solicitação, você verá dois elementos no terminal.
// O primeiro vem do log que recebe o chunk, algo com que não podemos
// trabalhar. O segundo é o parseBody, o corpo analisado que nos
// permite trabalhar com ele.
// O nome "message" vem do valor que atribuimos ao body no início,
// presente no input.
