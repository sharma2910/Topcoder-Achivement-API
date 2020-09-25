const service = require('../services/AchivementType')
const { wrapRoute } = require('../helpers/index')
const { wrap } = require('co')
const res = require('express/lib/response')
/**
 * Get all achivement type
 * @param {Object} req the req object 
 * @param {Object} res the res object
 */
async function getAll(req, res) {
    res.json(await service.getAll())
}

/**
 * Create an achivement type
 * @param {Object} req the req object 
 * @param {Object} res the res object
 */
async function create(req, res) {
    res.json(await service.create(req.body))
}

/**
 * get single an achivement type
 * @param {Object} req the req object 
 * @param {Object} res the res object
 */
async function getSingle(req, res) {
    const doc = await service.getSingle(req.params.id)
    if (!doc) {
        return res.sendStatus(404)
    }
    res.json(doc)
}

/**
 * Update an achivement type
 * @param {Object} req the req object 
 * @param {Object} res the res object
 */
async function update(req, res) {
    try {
        res.json(await service.update(req.params.id, req.body))
    } catch (e) {
        res.sendStatus(404)
    }
}

/**
 * Remove an achivement type
 * @param {Object} req the req object 
 * @param {Object} res the res object
 */
async function remove(req, res) {
    try {
        res.json(await service.remove(req.params.id))
    } catch (e) {
        res.sendStatus(404)
    }
}

module.exports = {
    getAll: wrapRoute(getAll),
    create: wrapRoute(create),
    getSingle: wrapRoute(getSingle),
    update: wrapRoute(update),
    remove: wrapRoute(remove)
}
