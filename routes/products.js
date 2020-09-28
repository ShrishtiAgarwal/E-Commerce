const express = require('express')
const app=express.Router()
const  {Products,Product_id, CategoryProducts} = require("../services/products")

app.get('',(req,res)=>{
    Products(req,res)
})

// app.get('/products/search',(req,res)=>{

// })

app.get('/:id',(req,res)=>{
    const id= req.params.id
    Product_id(id,res)
})


// app.get('/products/{product_id}/details',(req,res)=>{

// })

app.get('/inCategory/:id',(req,res)=>{
    const id= req.params.id
    CategoryProducts(id,res)

})

// app.get('/products/{product_id}/locations',(req,res)=>{

// })

app.get('/products/{product_id}/reviews',(req,res)=>{

})

app.post('/products/{product_id}/reviews',(req,res)=>{

})

module.exports=app;