const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');

router.get('/', userController.createUserController);

router.get('/:userId', userController.getUserController);

router.post('/', (req, res) => {
    const { name, email, password } = req.body;
    res.send({ name, email, password: '****' });
});

router.put('/:userId', (req, res) => {
    const userId = req.params.userId;
    const { name, email, password } = req.body;
    res.send({ name, email, password: '****' });
});

router.delete('/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`Deleted user: ${userId}`);
});


module.exports = router;