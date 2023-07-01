const { bookService } = require('../services');

const createBookController = async (req, res) => {
    try {
        const newBook = await bookService.createBook(req.body);
        res.json(newBook);
    } catch (error) {
        res.status(500).json({ action: 'createBook', error: err.message });
    }
};

const getBookController = async (req, res) => {
    try {
        const book = await bookService.getBook(req.params.bookId);
        if (!book) {
            res.status(404).json({ action: 'getBook', error: 'Book Not Found' });
        }
        else {
            res.json(book);
        }
    } catch (error) {
        res.status(500).json({ action: 'getBook', error: error.message });
    }
};

const updateBookController = (req, res) => {
    
};

module.exports = {createBookController, getBookController, updateBookController};
