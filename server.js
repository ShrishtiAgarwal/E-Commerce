const express = require('express')
//const app = express.Router
//const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {connectmysql}=require('./lib/sql_connection')
const {to} = require('await-to-js')
//const { async } = require('asyncawait')


let connection = async() =>{
    let [error,connect] = await to(connectmysql())
    if(error)
    {
        console.log("error in connecting")
    }
    else{
        console.log("Yes")
    }
}
connection()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())
app.use('/customers',require('./routes/customers'))
app.use('/categories',require('./routes/categories'))
app.listen(3000, () =>
    console.log("Server started")
)