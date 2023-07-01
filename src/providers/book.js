const { Book } = require('../models');

const createBook = async (bookId, book) => {
    try {
        const newBook =  await Book.create(...book, bookId);
        return newBook;
    } catch (error) {
        console.error('Error during creating new Book: ', error);
    }
};

const getBook = async (bookId) => {
    try {
        const book = await Book.findByPk(bookId, { where: { active: true }});
        return book;
    } catch (error) {
        console.error('Error during fetching Book: ', error);
        throw error;
    }
};

const getBooks = async (options) => {
    try {
        const book= await Book.findAll({ where: {active: true, [Op.or]: options}}); // con el operador Op considera el contenido de options con una condición or (al menos uno se cumple)
        return book;
    } catch (error) {
        throw new Error('No book matches with search params');
    }
};

const updateBook = async (bookId, book) => {
    try {
        await getbook(bookId);
        const [rowsUpdated] = await book.update(book, {
            where: { id: bookId, active: true },
            returning: true
        });
        console.log(`${rowsUpdated} rows were updated on DB`);
        return book.findByPk(bookId);
    } catch (error) {
        throw error;
    }
};

const deleteBook = async (bookId) => {
    try {
        await getbook(bookId);
        const [rowsUpdated] = await Book.update(
            {active: false},
            { where: { id: bookId}}
        );
        console.log(`${rowsUpdated} row was deleted (deactivated) on DB`);
        return Book.findByPk(bookId);
    } catch (error) {
        throw error;
    }
};

module.exports = { createBook, getBook, getBooks, updateBook, deleteBook};