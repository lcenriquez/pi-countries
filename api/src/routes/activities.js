const express = require('express');
const { Activity, Country } = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  let activity = await Activity.create({
    name: 'Test',
    difficulty: 1,
    duration: '50m',
    season: 'Spring',
  });
  let countries = [];
  countries.push(await Country.findByPk('DEU'))
  await activity.setCountries(countries);
  let activities = await Activity.findAll();
  res.json(activities);
});

module.exports = router;