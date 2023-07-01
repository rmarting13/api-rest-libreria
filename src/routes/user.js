const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');

router.post('/', userController.createUserController);

router.get('/:userId', userController.getUserController);

router.put('/:userId', userController.updateUserController);

// router.delete('/:userId', (req, res) => {
//     const userId = req.params.userId;
//     res.send(`Deleted user: ${userId}`);
// });


module.exports = router;