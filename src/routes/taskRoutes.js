const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const { createTask, getTasks, updateTask, deleteTask, sendTaskByEmail } = require('../controllers/taskController');

const router = Router();

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

router.get('/', getTasks);

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

router.delete('/:id', deleteTask);

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
