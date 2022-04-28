const express = require('express');
const router = express.Router();
const spellsController = require('./controllers/spellsController');
const userController = require('./controllers/userController');
const sheetController = require('./controllers/sheetController');
const checkLogin = require('./middlewares/checkLogin');

// user endpoints

router.post('/sign-up', userController.registerUser);
router.post('/sign-in', userController.loginUser);

router.use(checkLogin);
// spells endpoints

router.get('/spells/', spellsController.listAllSpells);
router.get('/spells/:idOrName', spellsController.getSpellByIdOrName);

//sheet enpoints

router.get('/sheets', sheetController.list);
router.get('/sheets/:id', sheetController.getById);
router.post('/sheets', sheetController.create);
router.put('/sheets/:id', sheetController.update);
router.delete('/sheets/:id', sheetController.remove);


module.exports = router;