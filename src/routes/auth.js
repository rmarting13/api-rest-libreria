const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { secret } = require('../middleware/authentication');
const userProvider = require('../providers/user')


router.post('/', async (req, res) => {
    const { user, password } = req.body;
    if (user === 'admin' && password === 'admin') {
        const token = jwt.sign({ user }, secret);
        res.json({ token });
    } else {
        const dbUser = await userProvider.validateUser(user, password);
        if (dbUser) {
            const token = jwt.sign({ user: dbUser.userName }, secret);
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Authentication failed'})
        }
    }
 });

module.exports =  router;