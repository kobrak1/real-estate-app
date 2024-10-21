const { info } = require("../utils/logger")

const reqLogger = (req, res, next) =>{
    info('Method:', req.method)
    info('Path:', req.path)
    info('Body:', req.body)
    info('-----')
    next()
}

module.exports = { reqLogger }