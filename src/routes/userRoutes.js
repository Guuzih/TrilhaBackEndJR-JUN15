const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const { register, login } = require('../controllers/userController');

const router = Router();

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: O nome de usuário
 *               password:
 *                 type: string
 *                 description: A senha do usuário
 *     responses:
 *       200:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Erro de validação
 */
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

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Faz o login de um usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: O nome de usuário
 *               password:
 *                 type: string
 *                 description: A senha do usuário
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       400:
 *         description: Erro de validação
 */
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
