const { libraryProvider } = require('../providers');

const getLibrary = async (libraryId) => {
    const library = await libraryProvider.getLibrary(libraryId);
    if (library) {
        // Lógica de negocio
        console.log('Library Found');
    }
    return 
}

const createLibrary = async (library) => {
    return await libraryProvider.createLibrary(library);
};

const getLibraries = async (options) => {
    return await libraryProvider.getLibraries(options);
};

const upadteLibrary = async (libraryId, library) => {
    return await libraryProvider.updateLibrary(libraryId, library);
};

const deleteLibrary = async (libraryId) => {
    return await libraryProvider.deleteLibrary(libraryId);
};


module.exports = { getLibrary, createLibrary, upadteLibrary, deleteLibrary };