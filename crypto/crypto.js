const crypto = require('crypto')
const http = require("http")
http.createServer((req,res)=>{
    let hash = crypto.createHash('md5').update('awaisniaz','utf8').digest('hex')
    res.write(hash)
    res.end()
}).listen(3000,()=>{
    console.log('I am Crypto')
})
