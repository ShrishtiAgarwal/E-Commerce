const express = require('express')
const app=express.Router()

app.get('/stripe/charge',(req,res)=>{
    console.log("Hey")

})

app.get('/stripe/webhooks',(req,res)=>{

})

module.exports=app;

