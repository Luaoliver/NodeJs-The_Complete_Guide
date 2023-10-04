const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req)
    //console.log(req.url, req.method, req.headers)

    const url = req.url

    if(url === '/') {
        res.setHeader('Content-type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Enter Message</title><head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></form></body>')
        //O 'action' dentro do form tem o papel de redirecioanr para a url '/message'
        //GET e POST são os métodos http mais importantes, porém há outros.
        //O atributo "name" será a url para onde o usuário será redirecionado após o clique em "Send"
        res.write('</html>')
        return res.end()
    }

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
