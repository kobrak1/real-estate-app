import jwt from "jsonwebtoken"
import { secret } from "../utils/config"

interface User {
    id: string
}

function tokenGenerator(user: User, username: string, age: number) {
    if (!secret) throw new Error("Secret key is missing in env")

    const payload = { id: user.id, username }
    const options = {
        expiresIn: `${age}`,
        issuer: "estateApp"
    }

    const token = jwt.sign(payload, secret, options)
    return token
}

export default tokenGenerator;