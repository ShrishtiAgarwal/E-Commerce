const sequelize = require("./connection");
const Category = require("./models/Category");
const Order = require("./models/Order")
const Product = require("./models/Product")
const Cart = require("./models/Cart")
const Customer = require("./models/Customer")
const Review = require("./models/Review")


// Model Associations
// User.belongsToMany(Project, { through: UserProject, foreignKey: 'id_user' });
// Product.belongsToMany(Category, { through: id, foreignKey: 'Category_id'  });
Customer.hasMany(Product);
Customer.hasOne(Cart);
Category.hasMany(Product,{foreignKey: 'Category_id'});
Product.hasMany(Review,{foreignKey: 'Product_id'});
Cart.belongsTo(Customer);
// Cart.belongsToMany(Product);
// Product.belongsToMany(Cart);
Order.belongsTo(Customer);
Customer.hasMany(Order,{foreignKey: 'Customer_id'});
Product.hasMany(Order,{foreignKey: 'Product_id'});

// Order.belongsToMany(Product);


const connectmysql=async ()=>{
    await sequelize.sync({ alter: true})
}

module.exports = {
    connectmysql
}
