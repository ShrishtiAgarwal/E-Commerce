const Review = require("../lib/models/Review")
const express = require('express')
const {to} = require('await-to-js')
//const { async } = require("asyncawait")
const get_review = async(id,res) => {
    
    let [error,data]=await to(Review.findAll({where:{Product_id:id}}))
    
    if(error)
    {
        console.log(error)
        res.json({
            "error":"Review table is empty"
        })
    }
    else {
        res.json({
            "data": data,
            "error": "null"
        })
    }
   
}

const post_review = async(req,res) =>{
    const query= req.body
    let [error,data]=await to(Review.create(query))
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


module.exports={
    get_review,post_review
}