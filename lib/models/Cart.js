const sequelize = require("sequelize");
const Sequelize=require('../connection')
const Cart= Sequelize.define('Cart',{
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
        unique: true},
    name:{type:sequelize.STRING},
    Quantity:{type:sequelize.INTEGER.UNSIGNED},
    Total: {type:sequelize.STRING},
    // Product_id: {
    //     type:sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'Product',
    //         key: 'id'
    //     }
    // },
    // Customer_id: {
    //     type:sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'Customer',
    //         key: 'id'
    //     }
    // }
})

module.exports = Cart