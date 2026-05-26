const express = require('express');
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const Pizza = require('./models/Pizza');
const Ingredient = require('./models/Ingredient');
const Cart = require("./models/Cart");
const Order = require("./models/Order");

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/PIZZARIADB').then(() => {
    console.log("MongoDB Connected");
}).catch((err) => {
    console.log(err);
});

app.get("/",(req,res) => {
    res.send("Pizzaria Server Running");
});

// GET ALL PIZZAS API
app.get("/api/pizzas", async (req,res) => {
    try{
        const pizzas = await Pizza.find();
        res.json(pizzas);
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
});

// GET ALL INGREDIENTS API
app.get("/api/ingredients", async (req,res) => {
    try{
        const ingredients = await Ingredient.find();
        res.json(ingredients);
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
});

// ADD TO CART API
app.post("/api/cart", async (req, res) => {
    try {

        const cartItem = new Cart({
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            quantity: req.body.quantity,
            userId:req.body.userId
        });

        const savedItem = await cartItem.save();

        res.status(201).json(savedItem);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET CART ITEMS API
app.get("/api/cart/:userId", async (req, res) => {

    try {
        const cartItems = await Cart.find({
            userId:req.params.userId
        });
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE CART ITEM QUANTITY API
app.put("/api/cart/:id", async (req, res) => {
    try {

        const updatedItem = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                quantity: req.body.quantity
            },
            { new: true }
        );

        res.json(updatedItem);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE CART ITEM API
app.delete("/api/cart/:id", async (req, res) => {
    try {

        await Cart.findByIdAndDelete(req.params.id);

        res.json({
            message: "Item deleted successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Register API
app.post("/api/register", async(req,res) => {

    try{
        const {name,email,password} = req.body;

        const userExists = await User.findOne({
            email
        });

        if(userExists){
            return res.status(400).json({message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const user = new User({
            name,
            email,
            password:hashedPassword
        });

        await user.save();

        res.json({message: "User registered successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

// Login API
app.post("/api/login", async(req,res) => {

    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message: "User not found"});
        }

        const isPasswordCorrect = await bcrypt.compare(password,user.password);

        if(!isPasswordCorrect){
            return res.status(400).json({meassage:"Wrong password"});
        }

        const token = jwt.sign(
            {
                id:user._id
            },"secretkey"
        );

        res.json({
            message:"Login Successfull",token,userId:user._id,username:user.name
        });

    }
    catch(error){
        res.status(500).json({message:error.message});
    }

});

// Create Order API
app.post("/api/orders",async(req,res) => {
    try{
        const order = new Order({
            userId:
            req.body.userId,

            name:
            req.body.name,

            address:
            req.body.address,

            phone:
            req.body.phone,

            paymentMethod:
            req.body.paymentMethod,

            items:
            req.body.items,

            totalAmount:
            req.body.totalAmount
        });

        const savedOrder = await order.save();

        res.status(201).json(savedOrder);

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

// Get Orders API
app.get("/api/orders/:userId", async(req,res)=>{

    try{

        const orders =
        await Order.find({

            userId:
            req.params.userId

        });

        res.json(
            orders
        );

    }

    catch(error){

        res.status(500).json({

            message:
            error.message

        });

    }

});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});




