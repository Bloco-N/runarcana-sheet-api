const express = require('express');
const router = express.Router();
const spellsController = require('./controllers/spellsController');
const userController = require('./controllers/userController');

// spells endpoints

router.get('/spells/', spellsController.listAllSpells);
router.get('/spells/:idOrName', spellsController.getSpellByIdOrName);

// user endpoints

router.post('/sign-up', userController.registerUser);
router.post('/sign-in', userController.loginUser);

module.exports = router;