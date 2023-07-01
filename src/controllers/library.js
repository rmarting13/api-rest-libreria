const { libraryService } = require('../services');

const createLibraryController = async (req, res) => {
    try {
        const newLibrary = await libraryService.createLibrary(req.body);
        res.json(newLibrary);
    } catch (error) {
        res.status(500).json({ action: 'createLibrary', error: err.message });
    }
};

const getLibraryController = async (req, res) => {
    try {
        const library = await libraryService.getLibrary(req.params.libraryId);
        if (!library) {
            res.status(404).json({ action: 'getLibrary', error: 'Library Not Found' });
        }
        else {
            res.json(library);
        }
    } catch (error) {
        res.status(500).json({ action: 'getLibrary', error: error.message });
    }
};

const updateLibraryController = (req, res) => {
    
};

module.exports = {createLibraryController, getLibraryController, updateLibraryController};