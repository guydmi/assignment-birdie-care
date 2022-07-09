const express = require('express');
const router = express.Router();
const controller = require('../services/controller');

router.get('/', async function(req, res, next) {
  try {
    res.json(await controller.getEvents());
  } catch (err) {
    console.error(`Error while getting events`, err.message);
    next(err);
  }
});

router.get('/visitid', async function(req, res, next) {
    try {
        res.json(await controller.getVisitId(req.query.care_recipient_id));
    } catch (err) {
        console.error(`Error while getting visit id`, err.message);
        next(err);
    }
})

router.get('/getKeys', async function(req, res, next)  {
    try {
        res.json(await controller.getKeys(req.query.care_recipient_id));
    } catch (err) {
        console.error(`Error while getting infos`, err.message);
        next(err);
    }
})


module.exports = router;