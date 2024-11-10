const mongoose = require("mongoose")

const tripScheme =new mongoose.Schema({
    tripData:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Trip",tripScheme)

