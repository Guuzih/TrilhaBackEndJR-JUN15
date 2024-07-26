const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const { createTask, getTasks, updateTask, deleteTask, sendTaskByEmail } = require('../controllers/taskController');

const router = Router();

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 description: O título da tarefa
 *     responses:
 *       200:
 *         description: Tarefa criada com sucesso
 *       400:
 *         description: Erro de validação
 */
router.post(
    '/',
    [
        check('title').notEmpty().withMessage('Title is required')
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    createTask
);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Retorna todas as tarefas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tarefas
 */
router.get('/', getTasks);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Atualiza uma tarefa existente
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 description: O título da tarefa
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *       400:
 *         description: Erro de validação
 */
router.put(
    '/:id',
    [
        check('title').notEmpty().withMessage('Title is required')
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    updateTask
);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Deleta uma tarefa existente
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa
 *     responses:
 *       200:
 *         description: Tarefa deletada com sucesso
 */
router.delete('/:id', deleteTask);

/**
 * @swagger
 * /tasks/send-email:
 *   post:
 *     summary: Envia uma tarefa por email
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - taskId
 *             properties:
 *               email:
 *                 type: string
 *                 description: O email para onde enviar a tarefa
 *               taskId:
 *                 type: integer
 *                 description: O ID da tarefa
 *     responses:
 *       200:
 *         description: Email enviado com sucesso
 *       400:
 *         description: Erro de validação
 */
router.post(
    '/send-email',
    [
        check('email').isEmail().withMessage('Valid email is required'),
        check('taskId').isInt().withMessage('Valid task ID is required')
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    sendTaskByEmail
);

module.exports = router;
