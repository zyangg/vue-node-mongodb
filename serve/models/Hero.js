const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    name: { type: String },
    icon: String
})
module.exports = mongoose.model('Hero', scheme)