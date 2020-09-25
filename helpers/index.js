const co = require('co')

/**
 * Runs a funcation using the co model so we can use async/await syntax
 * @param {Function} fn 
 */
function wrapRoute(fn) {
    return (req, res, next) => {
        co(fn(req, res, next)).catch(next)
    }
}

module.exports = {
    wrapRoute
}