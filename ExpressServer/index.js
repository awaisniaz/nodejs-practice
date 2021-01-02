const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('I am Data')
})

app.post('/signup', function (req, res) {
    // this is how we will receive params from front end 

    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    //For demo purpose
    const data = { 'name': name, 'email': email, 'password': password }
    console.log(name + '' + email + ' ' + password);
    res.send(JSON.stringify(data))

    /**
     * Store this in a database and perform further processing
     */
    res.send("In signup module")
});
app.listen(3000, () => {
    console.log('I am Listening port 3000')
})