const express = require('express')
const app=express.Router()
const  { get_review,post_review} = require("../services/Review")
// app.get('/tax',(req,res)=>{
//     console.log("Hey")

// })

// app.get('/tax​/{tax_id}',(req,res)=>{

// })

app.get('/:id/reviews',(req,res)=>{
    const id = req.params.id;
    get_review(id,res);

})

app.post('/:id/reviews',(req,res)=>{
    post_review(req,res);
})

module.exports=app;