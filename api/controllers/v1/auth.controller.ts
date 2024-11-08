import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import prisma from "../../lib/prisma"
import tokenGenerator from "../../utils/tokenGenerator"

// Test func
async function test(req: Request, res: Response) {
    res.status(200).send("Welcome back to my channel")
}

// Register controller
async function register(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { username, email, password } = req.body

    try {
        // Check if email exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        })
        if (existingUser) {
            res.status(400).send("email already in use")
            return;
        }
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10)
    
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            },
            select: {
                id: true,
                username: true,
            },
            // include: { posts: true // includes posts of this user }
        })

        const resObject = { 
            user: { id: newUser.id, username: newUser.username }, 
            message: "user created successfully" 
        }

        res.status(201).json(resObject)
    } catch (error) {
        console.error("failed to register:", error)
        next(error)
    }

}

// Login controller
async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email, password } = req.body

    try {
        // Check if the email is correct
        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) {
            res.status(400).send("Invalid credentials")
            return;
        }

        // Check if the password is correct
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            res.status(400).send("Invalid credentials")
            return;
        }

        // Generate a cookie token and send it to user
        const age = 1000 * 60 * 60
        const token = tokenGenerator(user, email, age)

        // Set the cookie
        res.cookie("token", token, {
            maxAge: age,
            httpOnly: true,
            sameSite: 'none',
            secure: process.env.NODE_ENV === "production" 
        })
        
        // send an appropriate response message
        res.status(200).json({ message: `${user.username} successfully logged in` })
    } catch(error) {
        console.error("Login failed:", error)
        next(error)
    }
}

// Logout Controller
async function logout(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {        
        res
          .clearCookie("token")
          .status(200)
          .send("User logged out successfully")
    } catch (error) {
        console.error("Failed to logout:", error)
        next(error)
    }
}

export { 
    register,
    login,
    logout,
    test
}