var file = require('fs')
var server = require('http')
server.createServer((req, res) => {
    let pattern = 'Awais'
    let str = file.readFileSync('data.txt')
    var length = str.match(pattern)

    res.send(length)
    res.end()
}).listen(3000, () => {
    console.log('I am Console Manager')
})