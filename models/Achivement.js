const mongoose = require('mongoose')

const { Schema } = mongoose

const AchivementSchema = new Schema({
    memberId: { type: String, require: true },
    achivementId: { type: String, require: true }
})

module.exports = mongoose.model('Achivement', AchivementSchema)