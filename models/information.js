const mongoose = require('mongoose')

const informationSchema = mongoose.Schema({
    image:String
})

const Information = module.exports = mongoose.model('Information',informationSchema)
