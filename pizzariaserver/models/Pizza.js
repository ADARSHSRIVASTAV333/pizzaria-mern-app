const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    id:String,
    type:String,
    price:Number,
    name:String,
    image:String,
    description:String,
    ingredient:[String],
    topping:[String]
});

module.exports = mongoose.model("Pizza",pizzaSchema);
