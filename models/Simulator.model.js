const mongoose = require('mongoose');

const simulatorSchema = mongoose.Schema({
    image: String,
    name: String,
})
const Simulator = mongoose.model('Simulator', simulatorSchema)

module.exports = Simulator
