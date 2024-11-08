import { config } from "dotenv"
config()

// Allowed origins for both dev and prod environments
const allowedOrigin: string = process.env.NODE_ENV === "production"
    ? "https://estate-listing.onrender.com"
    : "http://localhost:3000"

// Port number server runs on
const port: string | undefined = process.env.PORT

// Secret key for JWT token
const secret: string | undefined = process.env.SECRET

// Connection string for mongodb connection
const mongodb_uri: string | undefined = 
    process.env.NODE_ENV === "test"
        ? process.env.TEST_MONGODB_URI
        : process.env.MONGODB_URI

// Check for the required environment variables
if (!port || !secret || !mongodb_uri) {
    throw new Error("Mising required environment variables")
}

export { 
    port, 
    secret, 
    mongodb_uri,
    allowedOrigin,
}