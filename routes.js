const express = require('express');
const router = express.Router();
const spellsController = require('./controllers/spellsController');

// spells endpoints

router.get('/', spellsController.listAllSpells);

module.exports = router;