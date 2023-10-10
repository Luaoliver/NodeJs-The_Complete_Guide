const http = require('http');
const fs = require('fs');
// fs nos permite trabalhar com sistemas de arquivos

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
        fs.writeFileSync('message.txt', 'DUMMY')
        // devemos utilizar a sincronização de arquivos de gravação

        //res.writeHead(302, {})
        // writeHead nos permite escrever algumas meta informações
        // de uma só vez. Atribuindo um status code e um objeto js

        res.statusCode = 302
        res.setHeader('Location', '/')
        // Também é possível definir o status code e em seguida o
        // cabeçalho. Este também é um padrão aceito

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