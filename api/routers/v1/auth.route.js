const express = require("express")
const { register, login, logout } = require("../../controllers/v1/auth.controller")
const { validateLogin, validateRegister } = require("../../middlewares/authValidation")

const router = express.Router()

// routers
router.post("/register", validateRegister, register)
router.post("/login", validateLogin, login)
router.post("/logout", logout)

module.exports = router