const sequelize = require("sequelize");
const Sequelize=require('../connection')


const Review = Sequelize.define('Review',{
   
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
        unique: true},
    
    name:{type:sequelize.STRING},
    review:{type:sequelize.STRING},
    rating:{type:sequelize.INTEGER},
  
    })
    module.exports = Review