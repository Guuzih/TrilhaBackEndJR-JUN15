const Task = require('../models/Task');
const nodemailer = require('nodemailer');
const transporter = require('../emailConfig');


exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        await task.update(req.body);
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        await task.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.sendTaskByEmail = async (req, res) => {
    try {
        const { email, taskId } = req.body;
        const task = await Task.findByPk(taskId);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        console.log(process.env.EMAIL_USER)
        console.log(process.env.EMAIL_PASS)

        const mailOptions = {

            from: process.env.EMAIL_USER,
            to: email,
            subject: `Task Details: ${task.title}`,
            text: `Title: ${task.title}\nDescription: ${task.description}\nCompleted: ${task.completed}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};