const http = require('http')
const fs = require('fs')
var host = '127.0.0.1'
http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" })
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            console.log(err.message)
        }
        res.end(data)
    })

})
    .listen(3000, host, () => {
        console.log('I am Host')
    })