var file = require('fs')
const create = require('http')
var erro = require('./errorfile')
create.createServer((req, res) => {
    let x = new erro('I am Error What can do for me')
    res.write(x.erroThrow())
    res.end()
})
    .listen(3000, () => {
        console.log('I am Dat')
    })