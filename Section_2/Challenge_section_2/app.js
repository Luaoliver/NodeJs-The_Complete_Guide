const http = require('http');
const fs = require ('fs');

const server = http.createServer((req, res) => {
    const url = req.url

    if (url === '/') {
        res.setHeader('Content-type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Bem vindos!</title><head>')
        res.write('<body>Bem vindos ao desafio da Section 02</body>')
        res.write('</html>')
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