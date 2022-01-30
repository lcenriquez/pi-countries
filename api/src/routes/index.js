require('dotenv').config();
const axios = require('axios');
const { Router } = require('express');
const { Country } = require('../db');
const countriesRouter = require('./countries');
const { createBulkCountries } = require('../helpers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/', async (req, res) => {
  let countries;
  try {
    countries = await Country.findAll();
    if (countries.length === 0) {
      let response = await axios.get(`${process.env.API_URL}/all`);
      countries = await response.data;
      createBulkCountries(countries);
    }
  } catch(err) {
    console.log(err);
  }

  res.json(countries);
});

// Configurar los routers
router.use('/countries', countriesRouter);


module.exports = router;
