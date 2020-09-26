const express = require('express')
const app=express.Router()

app.get('/shoppingcart/generateUniqueId',(req,res)=>{

})

app.post('/shoppingcart/add',(req,res)=>{

})

app.get('/shoppingcart/{cart_id}',(req,res)=>{

})

app.put('/shoppingcart/update/{item_id}',(req,res)=>{

})

app.delete('/shoppingcart/empty/{cart_id}',(req,res)=>{

})

app.get('/shoppingcart/moveToCart/{item_id}',(req,res)=>{

})

app.get('/shoppingcart/totalAmount/{cart_id}',(req,res)=>{

})

app.get('/products/{product_id}/reviews',(req,res)=>{

})

app.get('/shoppingcart/saveForLater/{item_id}',(req,res)=>{

})

app.get('/shoppingcart/saveForLater/{item_id}',(req,res)=>{

})

app.get('/shoppingcart/getSaved/{cart_id}',(req,res)=>{

})

app.delete('/shoppingcart/removeProduct/{item_id}',(req,res)=>{

})

module.exports=app;
