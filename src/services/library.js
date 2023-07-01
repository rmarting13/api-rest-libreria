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

const upadteLibrary = (libraryId, library) => {
    // LLamada al provider con el objeto user
    return null;
};

const deleteLibrary = (libraryId) => {
    return `Deleted Library: ${id}`;
};


module.exports = { getLibrary, createLibrary, upadteLibrary, deleteLibrary };