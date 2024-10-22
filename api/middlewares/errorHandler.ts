import { Request, Response, NextFunction } from "express"

// Custom error interface
interface CustomError extends Error {
  name: string;
  message: string;
}

const unknownEndpoint = (req: Request, res: Response): void => {
    res.status(404).end()
}

const errorHandler = (error: CustomError, req: Request, res: Response, next: NextFunction): void => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      res.status(404).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
      res.status(400).json({ error: error.message })
    } else if ( error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')) {
      res.status(400).json({ error: 'expected username to be unique' })
    } else if ( error.name === 'JsonWebTokenError' ) {
      res.status(400).json({ error: 'token missing or invalid' })
    } else if (error.name === 'TokenExpiredError') {
      res.status(401).json({ error: 'token expired' })
    }
  
    next(error)
}

export {
    unknownEndpoint,
    errorHandler
}