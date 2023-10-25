const mongoose = require("mongoose");

const DrinkSchema = new mongoose.Schema({
    name: String,
    price: Number,
    isHot: Boolean
},{timestamps: true})

module.exports = (mongoose.model("Drink", DrinkSchema));