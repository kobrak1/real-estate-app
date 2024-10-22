import { body, validationResult, ValidationChain } from "express-validator";
import { Request, Response, NextFunction } from "express"

type ValidationMiddleware = ValidationChain | ((req: Request, res: Response, next: NextFunction) => void)

// Validation middleware for registration
const validateRegister: ValidationMiddleware[] = [
  body("username")
    .isAlphanumeric()
    .withMessage("Username must be alphanumeric")
    .trim()
    .escape(),
  body("email")
    .isEmail()
    .withMessage("Email is not valid")
    .normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/\d/)
    .withMessage("Password must contain a number"),

  (req: Request, res: Response, next: NextFunction) => {
    // Check for validation errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next(); // Proceed to the next middleware/route handler
  },
];


// Validation middleware for login
const validateLogin: ValidationMiddleware[] = [
  body("email")
    .isEmail()
    .withMessage("Email is not valid")
    .normalizeEmail(), // Sanitizes the email
  body("password")
    .notEmpty()
    .withMessage("Password is required") // Ensures password is provided
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"), // Minimum length requirement

    (req: Request, res: Response, next: NextFunction) => {
    // Check for validation errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    next(); // Proceed to the next middleware/route handler
  },
];

export =  {
    validateLogin,
    validateRegister
}
