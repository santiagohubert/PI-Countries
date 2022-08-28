const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getCountryName, getCountryId } = require('../controllers/country');
const { postActivities } = require('../controllers/activity')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', getCountryName);

router.get('/country/:id', getCountryId);

router.post('/activities', postActivities);

module.exports = router;
