const { Book } = require('../models');

const createBook = async (libraryId, book) => {
    try {
        const newBook =  await Book.create(...book, libraryId);
        return newBook;
    } catch (error) {
        console.error('Error during creating new Book: ', error);
    }
};

const getBook = async (bookId) => {
    try {
        const book = await Book.findByPk(bookId);
        return book;
    } catch (error) {
        console.error('Error during fetching Book: ', error);
        throw error;
    }
};

module.exports = { createBook, getBook };