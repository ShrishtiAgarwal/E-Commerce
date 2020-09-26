const express = require('express')
const app=express.Router()

app.get('/tax',(req,res)=>{
    console.log("Hey")

})

app.get('/tax​/{tax_id}',(req,res)=>{

})

module.exports=app;