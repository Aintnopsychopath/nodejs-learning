require('dotenv').config()
class Env {
    constructor (defaultPort) {
        this.port = process.env.PORT || defaultPort
    }
}

module.exports = new Env(3000)
