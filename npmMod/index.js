
const http = require('http');
const fs = require('fs');
const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8')
const objdata = JSON.parse(data)
const server = http.createServer((req, res) => {
   if(req.url == '/') {
    res.end('hello aejaz')
   } else if(req.url == '/contact') {
       res.writeHead(200, {'Content-type' : 'text/html'})

    res.end(`<h1>${objdata[1].name}<h1>`)
   } else {
       res.writeHead(404, {'Content-type' : 'text/html'})
       res.end('page does not exist')
   }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('listening');
})

