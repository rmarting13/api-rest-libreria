const fs = require('fs');


const createBook = (id, book) => {
    const bookfile = `book-${id}.json`;
    if (fs.existsSync(bookfile)) throw new Error ('File Exists');
    fs.writeFileSync(bookfile, JSON.stringify(req.body));
    return book;
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