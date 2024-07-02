const { Router } = require('express');
const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes');
const authMiddleware = require('../middlewares/authMiddleware');

const router = Router();

router.use('/users', userRoutes);
router.use('/tasks', authMiddleware, taskRoutes);

module.exports = router;
