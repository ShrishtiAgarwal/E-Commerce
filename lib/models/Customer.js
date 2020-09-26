const sequelize = require("sequelize");
const Sequelize=require('../connection')

const Customer = Sequelize.define('Customer',{
        id: {
            type: sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement:true,
            allowNull: false,
            unique: true},
        name:{
            type:sequelize.STRING 
            },
        email:{
            type:sequelize.STRING
            },
        
        address:{
            type:sequelize.STRING},
        
        phone_No:{type:sequelize.STRING},
        credit_card:{type:sequelize.STRING},
        
        islogin:{
            type:sequelize.STRING,
            default:"false"},
        
        accessToken:{type:sequelize.STRING},
        
        
    })

module.exports= Customer