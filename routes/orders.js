const express = require('express')
const app=express.Router()

const  {get_Order_by_id,post_Order,get_Order_by_customer_id,get_Order_detail} = require("../services/orders")


app.post('',(req,res)=>{
    post_Order(req,res);
})

app.get('/:id',(req,res)=>{
    const id = req.params.id;
    get_Order_by_id(id,res);
})

app.get('/inCustomer/:id',(req,res)=>{
    const id = req.params.id;
    get_Order_by_customer_id(id,res);
})

app.get('/shortDetail/:id',(req,res)=>{
    const id = req.params.id
    get_Order_detail(id,res)
})

module.exports=app;