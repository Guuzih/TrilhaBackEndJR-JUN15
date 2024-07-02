const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const { register, login } = require('../controllers/userController');

const router = Router();

router.post(
    '/register',
    [
        check('username').notEmpty().withMessage('Username is required'),
        check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    register
);

router.post(
    '/login',
    [
        check('username').notEmpty().withMessage('Username is required'),
        check('password').notEmpty().withMessage('Password is required')
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    login
);

module.exports = router;
