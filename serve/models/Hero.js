const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    name: { type: String },
    icon: String,
    title: String,
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
    scores: {
        difficult: Number,
        skills: Number,
        attack: Number,
        survive: Number
    },
    skills: [{
        icon: { type: String },
        name: String,
        description: String,
        tips: String
    }],
   
     items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
    items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
    usage_tips: String,
    battleTips: String,
    teamTips: String,
    parents: [{
        hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
        descriptin: String
    }]
    

})
module.exports = mongoose.model('Hero', scheme)