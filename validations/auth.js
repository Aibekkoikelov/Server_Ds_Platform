import { body } from 'express-validator';

export const registerValidation = [
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
  body('fullName').isLength({ min: 2 }),
  body('avatarUrl').optional().isURL(),
  body('phoneNumber').isLength({ min: 10 }),
];
