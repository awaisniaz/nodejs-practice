var file = require('fs')
var http = require('http')

var server = http.createServer((req, res) => {
    //res.writeHead(201, { 'content-type': 'text/plain' })
    file.readFile('data.tx', (err, data) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }
    })
    res.end()
})


server.listen(3000, () => {
    console.log('I am File')
})