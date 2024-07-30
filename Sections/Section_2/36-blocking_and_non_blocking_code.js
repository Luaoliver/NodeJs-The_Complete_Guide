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

    if(url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })

        return req.on('end', () => {
            // O req.on é nosso ouvinte de eventos, que será executado em assim que a solicitação
            // for finalizada.
            const parseBody = Buffer.concat(body).toString()
            console.log(parseBody)

            const message = parseBody.split('=')[1]

            // Dentro dessa função que será analisada em algum momento do futuro, temos ainda o nosso
            // ouvinte de eventos que será executado assim que terminarmos de escrever o o arquivo.
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302
                res.setHeader('Location', '/')

                return res.end()
            })

            // Esse tipo de código é muito padrão para o nodeJs
            // Temos uma arquitetura orientada a eventos, na qual você diz ao nodeJs que faça algo
            // e em seguida ele transfere esse processo para o sistema operacional que utiliza
            // multi-threading e despacha apenas pequenas ações para nunca bloquear a execução
            // e sempre retornar quando uma função for finalizada.

            // Esse é o motivo pelo qual o NodeJs possui um alto desempenho, ele nunca bloqueará seu
            // servidor, apenas avança e diz ao sistema operacional que faça algo e retorne com a
            // resposta que não seja uma operação de bloqueio.
        })
    }

    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first Page</title><head>')
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>')
    res.end()
});

server.listen(3000);
