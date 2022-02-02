const express = require('express');
const { Activity, Country } = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  let activities = await Activity.findAll({include: Country});
  res.json(activities);
});

router.get('/:id', async (req, res) => {
  let id = req.params.id;
  let activity = await Activity.findByPk(id, {include: Country});
  res.json(activity);
});

router.post('/', async (req, res) => {
  let activityJSON = req.body.activity;
  if (activityJSON) {
    let { name, difficulty, duration, season, countries } = activityJSON;
    let promises = countries.map(country => Country.findByPk(country));
    countries = await Promise.all(promises);
    let activity = await Activity.create({
      name,
      difficulty,
      duration,
      season
    });
    await activity.setCountries(countries);
    return res.status(201).json(activity);
  }
  res.status(401).json({error: 'Could not create activity'});
});

module.exports = router;