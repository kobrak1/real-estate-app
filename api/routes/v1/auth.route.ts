import express from "express";
import { register, login, logout, test } from "../../controllers/v1/auth.controller"
import { validateLogin, validateRegister } from "../../middlewares/authValidation"

const router = express.Router()

// routers
router.get("/test", test)
router.post("/register", validateRegister, register)
router.post("/login", validateLogin, login)
router.post("/logout", logout)

export default router;