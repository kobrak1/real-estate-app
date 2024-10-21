const { PrismaClient } = require("@prisma/client")
const config = require("../utils/config")

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: config.mongodb_uri
        }
    }
})

module.exports = prisma