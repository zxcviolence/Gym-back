const mongoose = require('mongoose');

const coachSchema = mongoose.Schema({
    image: String,
    name: String,
    description: String
})

const Coach = mongoose.model('Coach', coachSchema);

module.exports = Coach;