const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({

    userId: {

        type: String

    },

    name: {

        type: String

    },

    address: {

        type: String

    },

    phone: {

        type: String

    },

    paymentMethod: {

        type: String

    },

    items: [

        {

            name: String,

            image: String,

            price: Number,

            quantity: Number

        }

    ],

    totalAmount: {

        type: Number

    },

    orderDate: {

        type: Date,

        default: Date.now

    }

});

module.exports =
mongoose.model(
    "Order",
    orderSchema
);