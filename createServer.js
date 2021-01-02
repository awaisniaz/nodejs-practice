const http = require('http')
var host = '127.0.0.1'
http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" })
    res.write('I am Server ')
    res.write('I am Double Server')
    res.end()

})
    .listen(3000, host, () => {
        console.log('I am Host')
    })