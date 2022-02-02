const express = require('express');
const { Op } = require('sequelize');
const { Country, Activity } = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  let name = req.query.name;
  let countries;
  if (name) {
    countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      }
    })
  } else {
    countries = await Country.findAll();
  }
  res.json(countries);
});

router.get('/:id', async (req, res) => {
  let id = req.params.id;
  let country = await Country.findByPk(id,{include: Activity});
  if (!country) return res.status(404).json("Country not found");
  res.json(country);
});

module.exports = router;