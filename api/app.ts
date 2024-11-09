import express, { Express } from "express"
import cors from "cors";
import { unknownEndpoint, errorHandler } from "./middlewares/errorHandler"
import { reqLogger } from "./middlewares/requestLogger"

// Routers
import authRouterV1 from "./routes/v1/auth.route"

const app: Express = express()

// Middlewares
app.use(cors({ 
    origin: true, 
    credentials: true 
}))
app.use(express.json())
app.use(reqLogger)

app.use("/api/auth/v1", authRouterV1)

app.use(unknownEndpoint)
app.use(errorHandler)

export default app;