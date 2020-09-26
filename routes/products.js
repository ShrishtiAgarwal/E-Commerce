const express = require('express')
const app=express.Router()

app.get('/products',(req,res)=>{

})

app.get('/products/search',(req,res)=>{

})

app.get('/products/{product_id}',(req,res)=>{

})

app.get('/products/inDepartment/{department_id}',(req,res)=>{

})

app.get('/products/{product_id}/details',(req,res)=>{

})

app.get('/products/inCategory/{category_id}',(req,res)=>{

})

app.get('/products/{product_id}/locations',(req,res)=>{

})

app.get('/products/{product_id}/reviews',(req,res)=>{

})

app.post('/products/{product_id}/reviews',(req,res)=>{

})

module.exports=app;