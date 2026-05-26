const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    quantity: Number,
    userId:{
        type:String
    }
});

module.exports = mongoose.model("Cart", cartSchema, "shoppingcart");