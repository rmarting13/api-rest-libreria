const { userService } = require('../services');

const createUserController = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ action: 'createuser', error: err.message });
    }
};

const getUserController = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.userId);
        if (!user) {
            res.status(404).json({ action: 'getUser', error: 'User Not Found' });
        }
        else {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ action: 'getUser', error: error.message });
    }
};

const updateUserController = (req, res) => {
    
};

module.exports = {createUserController, getUserController, updateUserController};