const Category = require("../lib/models/Category")
const express = require('express')
const { async } = require("asyncawait")
const categorie = async(req,res) => {
    let [error,data]=await Category.findAll({attributes:['id','name']})
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

const categories_id = async(id,res) =>{
    let [error,data]=await Category.findOne({where:{id:id}})
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
    categorie,categories_id
}