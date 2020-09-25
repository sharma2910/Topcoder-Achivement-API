const mongoose = require('mongoose')

const { Schema } = mongoose

const AchivementTypeSchema = new Schema({
    name: { type: String, required: true }
})

module.exports = mongoose.model('AchivementType',AchivementTypeSchema)