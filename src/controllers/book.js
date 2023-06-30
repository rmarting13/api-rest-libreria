const { bookService } = require('../services');

const createBookController = (req, res) => {
    try {
        const newBook = service.bookService.createBook(req.params.bookId, req.body);
        res.json(newBook);
    } catch (err) {
        res.status(400).json({ action: 'createBook', error: err.message });
    }
};

const getBookController = (req, res) => {
    console.log(`Book found with id ${req.params.bookId}`);
    res.json({id: req.params.bookId, name: "Lord of the rings"});
};

const updateBookController = (req, res) => {
    console.log(`Book found with id ${req.params.bookId}`);
    res.json({ id: req.params.bookId, ...req.body});
}

module.exports = {createBookController, getBookController, updateBookController};
