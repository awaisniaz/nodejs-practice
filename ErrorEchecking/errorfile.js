class Error {
    constructor(data) {
        this.data = data
    }
    erroThrow = () => {
        console.log(this.data)
    }
}

module.exports = Error