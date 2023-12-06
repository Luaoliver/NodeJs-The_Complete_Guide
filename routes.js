const fs = require('fs')


// 01
// Precisamos conectar o app.js com o routes.js. Para isso, criaremos uma nova
// função, que pode ser assim:
// function requestHandler(req, res) {}
// Ou assim:
const requestHandler = (req, res) => {
    // 02
    // Aqui adicionamos todo o código que anteriormente foi feito no app.js

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
    
    if(url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
    
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString()
            console.log(parseBody)
    
            const message = parseBody.split('=')[1]
    
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302
                res.setHeader('Location', '/')
    
                return res.end()
            })
        })
    }
    
    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first Page</title><head>')
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>')
    res.end()
}

// 03
// É necessário exportar o arquivo, para isso há duas maneiras. A primeira
// delas é adicionando o module.exports ao final do arquivo, assim:
module.exports = requestHandler
// Utilizando essa maneira é possível trabalhar com essa função, importando-a
// a partir dessas rotas. Esse export será buscado pelo nodejs, verificando se
// algo foi registrado para esse arquivo.

// Também podemos utiliza-lo das seguintes maneiras:
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// }
// ou também:
// module.exports.handler = requestHandler
// module.exports.someText = 'Some hard coded text'