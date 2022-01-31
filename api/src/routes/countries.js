const express = require('express');
const { Country, Activity } = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  let countries = await Country.findAll();
  res.json(countries);
});

router.get('/:id', async (req, res) => {
  let id = req.params.id;
  let country = await Country.findByPk(id,{include: Activity});
  if (!country) return res.status(404).json("Country not found");
  res.json(country);
});

module.exports = router;