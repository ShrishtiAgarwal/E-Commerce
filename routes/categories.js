const express = require('express')
const app=express.Router()
const  {categorie,categories_id} = require("../services/categories")

app.get('',(req,res)=>{
    console.log("here")
    categorie(req,res);
    
})

app.get('/{category_id}',(req,res)=>{
    const cat_id = req.params.id;
    categories_id(cat_id,res);
})

// app.get('/categories/inProduct/{product_id}',(req,res)=>{

// })

// app.get('/categories/inDepartment/{department_id}',(req,res)=>{

// })

module.exports=app;