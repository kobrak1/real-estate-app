require("dotenv").config()

const port = process.env.PORT
const secret = process.env.SECRET
const mongodb_uri = process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI

module.exports = {
    port,
    secret,
    mongodb_uri
}