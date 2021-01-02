const http = require('http')
const fs = require('fs')

var server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "application/json" })
    let response = { status: 200, message: 'succesfull' }
    res.end(JSON.stringify(response))

})

server.listen(3000, '127.0.0.1', () => {
    console.log('I am Node Server')
})