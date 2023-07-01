const express = require('express');
const router = express.Router();

const libraryController = require('../controllers/library');

router.post('/library', libraryController.createLibraryController);

router.get('/:libraryId', libraryController.getLibraryController);

router.put('/:libraryId', libraryController.updateLibraryController);

module.exports = router;