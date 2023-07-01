const { Library } = require('../models');

const createLibrary = async (library) => {
    try {
        const newLibrary = await Library.create(library);
        return newLibrary;
    } catch (error) {
        console.error('Error during creating new Library: ', error);
    }
};

const getLibrary = async (libraryId) => {
    try {
        const library = await libraryId.findByPk(libraryIdId, { include: { all: true}});
        return library;
    } catch (error) {
        console.error('Error during fetching Library: ', error);
        throw error;
    }
};

module.exports = { createLibrary, getLibrary };