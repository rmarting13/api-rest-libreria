const { bookProvider, libraryProvider } = require('../providers');


const createBook = async (libraryId, book) => {
    const library = await libraryProvider.getLibrary(libraryId);
    if (library){
        const newBook = await bookProvider.createBook(libraryId, book);    
        return book;
    } else {
        return null;
    }
}

const getBook = (req, res) => {
    console.log(`Book found with id ${req.params.bookId}`);
    res.json({id: req.params.bookId, name: "Lord of the rings"});
};

const updateBook = (req, res) => {
    console.log(`Book found with id ${req.params.bookId}`);
    res.json({ id: req.params.bookId, ...req.body});
};

module.exports = { createBook };