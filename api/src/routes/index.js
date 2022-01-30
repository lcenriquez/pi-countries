require('dotenv').config();
const axios = require('axios');
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/', async (req, res) => {
  let countries;
  try {
    let response = await axios.get(`${process.env.API_URL}/all`);
    countries = await response.data;
  } catch(err) {
    console.log(err);
  }

  res.json(countries);
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
