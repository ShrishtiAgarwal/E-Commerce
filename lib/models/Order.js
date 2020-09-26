const sequelize = require("sequelize");
const Sequelize=require('../connection')

const Order= Sequelize.define('Order',{
        id: {
            type: sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement:true,
            allowNull: false,
            unique: true},
        Delivery_date:{type:sequelize.STRING},
        Total:{type:sequelize.STRING},
        Payment_status: {type:sequelize.STRING},
})

module.exports = Order