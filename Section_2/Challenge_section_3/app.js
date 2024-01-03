const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url

    if (url === '/') {
        res.setHeader('Content-type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Bem vindos!</title><head>')
        res.write('<h1>Bem vindos ao desafio da Section 02</h1>')
        res.write('<body>Adicione no formulario abaixo um nome de usuario</body>')
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></form></body>')
        res.write('</html>')
        return res.end()
    }

    if(url === '/create-user' && method === 'POST') {
        const body = []

        req.on('data', (chunk) => {
            body.push(chunk)
        })

        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString()

            const message = parseBody.split('=')[1]

            console.log(message)
        })

        res.statusCode = 302
        res.setHeader('Location', '/')

        return res.end()
    }

    if (url === '/users') {
        res.setHeader('Content-type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Usuários cadastrados</title><head>')
        res.write('<ul>')
        res.write('<li>Usuario 01</li>')
        res.write('<li>Usuario 02</li>')
        res.write('<li>Usuario 03</li>')
        res.write('</ul>')
        res.write('</html>')
        return res.end()
    }
})

server.listen(3000);