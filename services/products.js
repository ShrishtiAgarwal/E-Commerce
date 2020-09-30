const Product = require("../lib/models/Product")
const express = require('express')
const {to} = require('await-to-js')
//const { async } = require("asyncawait")
const Products = async(req,res) => {
    let [error,data]=await to(Product.findAll({attributes:['id','name']}))
    console.log(data)
    if(error)
    {
        console.log(error)
        res.json({
            "error":"Category table is empty"
        })
    }
    else {
        res.json({
            "data": data,
            "error": "null"
        })
    }
   
}

const Product_id = async(id,res) =>{
    let [error,data]=await to(Product.findOne({where:{id:id},  attributes: {exclude: ['createdAt', 'updatedAt']} }))
    if(error)
    {
        res.json({
            "error":"No such id is found"
        })
    }
    else {
        res.json({
            "data": data,
            "error": "null"
        })
    }
}

const CategoryProducts = async(id,res) =>{
    let [error,data]=await to(Product.findALL({where:{Category_id:id},  attributes: {exclude: ['createdAt', 'updatedAt']} }))
    if(error)
    {
        res.json({
            "error":"No such id is found"
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
    Products,Product_id, CategoryProducts
}