const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req)
    console.log(req.url, req.method, req.headers)
    res.setHeader('Content-type', 'text/html')

    //Permite escrever dados para a resposta
    //Pode ser escrito de uma vez ou dividido em várias linhas
    res.write('<html>')
    res.write('<head><title>My first Page</title><head>')
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>')
    //A partir desse ponto, não se pode mais escrever pois
    //é o momentyo em que será enviado de volta
    res.end()


    //process.exit()
});

server.listen(3000);
