//Database Access Object
//re-usable module to connect DB_test database
let mysql = require('mysql')

let client = {}

function connect () {
    client = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'apartment_db'
        })

    client.connect((error) => {
        if (error) {
            throw error
        }
        else{
            console.log("Connected to Database")
        }
    })
}

function query (query_str, values, resultCallback) {
    client.query(query_str, values, (error, result) => {
        if (error) {
            throw error
        }
        resultCallback(result)
    })
}

function disconnect () {
    client.end()
}

module.exports = {
    connect: connect,
    disconnect: disconnect,
    query: query
}