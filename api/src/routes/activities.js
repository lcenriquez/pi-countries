const express = require('express');
const { Activity } = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  await Activity.create({
    name: 'Test',
    difficulty: 1,
    duration: '50m',
    season: 'Spring',
  });
  let activities = await Activity.findAll();
  res.json(activities);
});

module.exports = router;