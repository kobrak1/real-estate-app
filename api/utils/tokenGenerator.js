const jwt = require("jsonwebtoken");
const config = require("../utils/config")

function tokenGenerator(user, username, age) {
    const payload = { id: user.id, username }
    const secret = config.secret
    const options = {
        expiresIn: `${age}`,
        issuer: "estateApp"
    }

    const token = jwt.sign(payload, secret, options)
    return token
}

module.exports = tokenGenerator;