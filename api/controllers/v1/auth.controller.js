const bcrypt = require("bcrypt")
const prisma = require("../../lib/prisma")
const tokenGenerator = require("../../utils/tokenGenerator")

async function register(req, res,next) {
    const { username, email, password } = req.body

    try {
        // Check if email exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        })
        if (existingUser) return res.status(400).send("email already in use")
        
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
    
        console.log(newUser)
        res.status(201).json({ user: `${newUser.username} created successfully` })
    } catch (error) {
        console.error("failed to register:", error)
        res.status(500).send("Internal server error (registration)")
    }

}

async function login(req, res, next) {
    const { email, password } = req.body

    try {
        // Check if the email is correct
        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) return res.status(400).send("Invalid credentials")

        // Check if the password is correct
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) return res.status(400).send("Invalid credentials")

        // Generate a cookie token and send it to user
        const age = 1000 * 60 * 60
        const token = tokenGenerator(user, email, age)

        // Set the cookie
        res.cookie("token", token, {
            maxAge: age,
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === "production" 
        })
        
        // send an appropriate response message
        res.status(200).json({ message: `${user.username} successfully logged in` })
    } catch(error) {
        console.error("Login failed:", error)
        res.status(500).send("Internal server error (login)")
    }
}

async function logout(req, res, next) {
    try {        
        res
          .clearCookie("token")
          .status(200)
          .send("User logged out successfully")
    } catch (error) {
        console.error("Failed to logout:", error)
        res.status(500).send("Internal server error (logout)")
    }
}

module.exports = { 
    register,
    login,
    logout
}