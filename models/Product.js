const mongoose = require("mongoose");
//i will tell mongoose how my products will look like

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    }, 
   
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
