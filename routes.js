const express = require('express');
const router = express.Router();
const spellsController = require('./controllers/spellsController');
const userController = require('./controllers/userController');
const charController = require('./controllers/charController');
const checkLogin = require('./middlewares/checkLogin');

// user endpoints

router.get('/test', (req, res) => {
  res.status(200).json('test');
})

router.post('/sign-up', userController.registerUser);
router.post('/sign-in', userController.loginUser);

router.use(checkLogin);
// spells endpoints

router.get('/spells/', spellsController.listAllSpells);
router.get('/spells/:id', spellsController.getSpellById);

//sheet enpoints

router.get('/chars', charController.list);
router.get('/chars/:id', charController.getById);
router.post('/chars', charController.create);
router.put('/chars/:id', charController.update);
router.delete('/chars/:id', charController.remove);


module.exports = router;