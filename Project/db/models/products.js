const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ProductsSchema = new Schema({
    ProductId: Number,
    Name: String,
    Description: String,
    Price: Number,
    Category: String,
    Manufacturer: String,
    Availability: String,
    howMushInStock: Number,
    image: String
    });
    

const Products = mongoose.model('Products',ProductsSchema);
module.exports = Products