import { config } from "dotenv"
config()

const port: string | undefined = process.env.PORT
const secret: string | undefined = process.env.SECRET
const mongodb_uri: string | undefined = 
    process.env.NODE_ENV === "test" 
        ? process.env.TEST_MONGODB_URI 
        : process.env.MONGODB_URI

// Check for the required environment variables
if (!port || !secret || !mongodb_uri) {
    throw new Error("Mising required environment variables")
}

export { port, secret, mongodb_uri }