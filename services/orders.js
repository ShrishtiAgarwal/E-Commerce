const Order = require("../lib/models/Order")
const express = require('express')
const {to} = require('await-to-js')
//const { async } = require("asyncawait")
const get_Order_by_id = async(id,res) => {
    
    let [error,data]=await to(Order.findAll({where:{id:id}},
                                            {attributes:['id','name']}))
    
    if(error)
    {
        console.log(error)
        res.json({
            "error":"Order table is empty"
        })
    }
    else {
        res.json({
            "data": data,
            "error": "null"
        })
    }
   
}

const post_Order = async(req,res) =>{
    const query= req.body
    let [error,data]=await to(Order.create(query))
    if(error)
    {
        res.json({
            "error":"Error connecting"
        })
    }
    else {
        res.json({
            "data": data,
            "error": "null"
        })
    }
}

const get_Order_by_customer_id = async(id,res) => {
    
    let [error,data]=await to(Order.findAll({where:{Customer_id:id}},
                                            {attributes:['id','name']}))
    
    if(error)
    {
        console.log(error)
        res.json({
            "error":"Order table is empty"
        })
    }
    else {
        res.json({
            "data": data,
            "error": "null"
        })
    }
   
}

const get_Order_detail= async(id,res) => {
    
    let [error,data]=await to(Order.findAll({where:{id:id}},
                                            {attributes: {exclude: ['createdAt', 'updatedAt']}}))
    
    if(error)
    {
        console.log(error)
        res.json({
            "error":"Order table is empty"
        })
    }
    else {
        res.json({
            "data": data,
            "error": "null"
        })
    }
   
}



module.exports={
    get_Order_by_id,post_Order,get_Order_by_customer_id,get_Order_detail
}