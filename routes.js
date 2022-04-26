const express = require('express');
const router = express.Router();
const spellsController = require('./controllers/spellsController');
const userController = require('./controllers/userController');
const checkLogin = require('./middlewares/checkLogin');

// user endpoints

router.post('/sign-up', userController.registerUser);
router.post('/sign-in', userController.loginUser);

router.use(checkLogin);
// spells endpoints

router.get('/spells/', spellsController.listAllSpells);
router.get('/spells/:idOrName', spellsController.getSpellByIdOrName);


module.exports = router;