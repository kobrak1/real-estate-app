import { Request, Response, NextFunction } from "express"
import { info } from "../utils/logger"

const reqLogger = (req: Request, res: Response, next: NextFunction): void => {
    info('Method:', req.method)
    info('Path:', req.path)
    info('Body:', req.body)
    info('-----')
    next()
}

export { reqLogger }