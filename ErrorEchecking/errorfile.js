class Error {
    constructor(data) {
        this.data = data
    }
    erroThrow = () => {
        return this.data
    }
}

module.exports = Error