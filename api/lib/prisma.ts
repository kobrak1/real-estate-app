import { PrismaClient } from "@prisma/client"
import { mongodb_uri } from "../utils/config"

// ensure mongodb_uri exists to avoid runtime errors
if (!mongodb_uri) throw new Error("mongodb_uri is missing in env")

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: mongodb_uri
        }
    }
})

export default prisma;