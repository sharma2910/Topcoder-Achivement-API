const AchievementType = require('../models/AchivementType')
const _ = require('lodash')
/**
 * Get all achivement types
 */
async function getAll() {
    return await AchievementType.find({})
}

/**
 * Create an achivement type
 * @param {Object} data the achivement type object
 */
async function create(data) {
    return await AchievementType.create(data)
}

/**
 * Get a single achivement type based on the id
 * @param {String} id 
 */
async function getSingle(id) {
    return await AchievementType.find({ _id: id })
}

/**
 * Update achivement type
 * @param {String} id 
 * @param {Object} updatedData 
 */
async function update(id, updatedData) {
    const doc = await AchievementType.findById(id);
    if (!doc) throw new Error()
    _.extend(doc, _.omit(updatedData, ['_id']))
    return await doc.save()
}

/**
 * 
 * @param {String} id 
 */
async function remove(id) {
    const doc = await AchievementType.findById(id)
    if (!doc) throw new Error()
    return await doc.remove()
}


module.exports = {
    getAll,
    create,
    getSingle,
    update,
    remove
}