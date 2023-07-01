const { Library } = require('../models');
const { Op } = require('sequelize');

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
        const library = await Library.findByPk(libraryIdId, { include: { all: true}});
        return library;
    } catch (error) {
        console.error('Error during fetching Library: ', error);
        throw error;
    }
};

const getLibraries = async (options) => {
    try {
        const libraries= await Library.findAll({ where: { [Op.or]: options}}); // con el operador Op considera el contenido de options con una condición or (al menos uno se cumple)
        return libraries;
    } catch (error) {
        throw new Error('No library matches with search params');
    }
};

const updateLibrary = async (libraryId, library) => {
    try {
        await getLibrary(libraryId);
        const [rowsUpdated] = await Library.update(library, {
            where: {id: libraryId },
            returning: true
        });
        console.log(`${rowsUpdated} rows were updated on DB`);
        return Library.findByPk(libraryId);
    } catch (error) {
        throw error;
    }
};

const deleteLibrary = async (libraryId) => {
    try {
        await getLibrary(libraryId);
        const [rowsUpdated] = await Library.update(
            {active: false},
            { where: { id: libraryId}}
        );
        console.log(`${rowsUpdated} row was deleted (deactivated) on DB`);
        return Library.findByPk(libraryId);
    } catch (error) {
        throw error;
    }
};

module.exports = { createLibrary, getLibrary , getLibraries, deleteLibrary, updateLibrary};