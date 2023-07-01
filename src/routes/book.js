const express = require('express');
const router = express.Router();

const bookController = require('../controllers/book');

router.post('/', bookController.createBookController);

router.get('/:bookId', bookController.getBookController);

router.put('/:bookId', bookController.updateBookController);

module.exports = router;