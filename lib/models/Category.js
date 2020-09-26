const sequelize = require("sequelize");
const Sequelize=require('../connection')

//const client=new sequelize('mysql://root:password@0.0.0.0:3306/ecommerce')


const Category = Sequelize.define('Category',{
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
        unique: true},
    name:{
        type:sequelize.STRING
        },
    description:{
        type:sequelize.STRING
        },
    
})

module.exports = Category