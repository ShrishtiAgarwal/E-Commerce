const sequelize = require("sequelize");
const Sequelize=require('../connection')
const Category = require('../models/Category')
const Product = Sequelize.define('Product',{
        id: {
            type: sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement:true,
            allowNull: false,
            unique: true},
        name:{
            type:sequelize.STRING
            },
        desc : {
            type:sequelize.STRING,
        },
        price:{
            type:sequelize.STRING},
        discounted_price:{
            type:sequelize.STRING},
        // category_id:{
        //     type:sequelize.INTEGER,
        //     references: {
        //         model: 'Category',
        //         key: 'id'
        //     }
        // }
        }
        )

module.exports=Product