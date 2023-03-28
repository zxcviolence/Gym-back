const mongoose = require('mongoose');

const goodsSchema = mongoose.Schema({
    brand: String,
    name: String,
    image: String,
    price: String,
    subtitle: String
})

const Goods = mongoose.model("Goods", goodsSchema)

module.exports = Goods