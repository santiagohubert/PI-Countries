const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getCountryName, getCountryId, getApiCountry } = require('../controllers/country');
const { postActivities, getActivities } = require('../controllers/activity');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/c', getApiCountry)

router.get('/countries', getCountryName);

router.get('/countries/:id', getCountryId);

router.get('/activities', getActivities);

router.post('/activities', postActivities);

module.exports = router;
