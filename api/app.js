const express = require("express")
const cors = require("cors")
const app = express()
const { unknownEndpoint, errorHandler } = require("./middlewares/errorHandler")
const { reqLogger } = require("./middlewares/requestLogger")

// Routers
const authRouterV1 = require("./routers/v1/auth.route")

// Middlewares
app.use(cors())
app.use(express.json())
app.use(reqLogger)

app.use("/api/auth/v1", authRouterV1)

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app