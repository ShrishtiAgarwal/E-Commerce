const express = require('express')
const app=express.Router()
const {customer, customer_update,customer_login}=require('./../services/customers')
const Login = require('../middlewares/login_middleware')
const middle = require('../middlewares/token_middleware')
app.use(express.json())

app.post('',(req,res)=>{
    console.log("here")
   customer(req,res);

})

app.post('/update',middle,Login,(req,res)=>{
    customer_update(req,res);
})



app.post('/login',(req,res)=>{
    customer_login(req,res);
})

// app.post('/customers/facebook',(req,res)=>{

// })

// app.put('/customers/address',(req,res)=>{

// })

// app.put('/customers/creditCard',(req,res)=>{

// })


module.exports=app;