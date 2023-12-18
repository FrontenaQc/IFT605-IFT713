const express = require('express');
const router = express.Router();

const gen = require('../Generateur');

/* GET parties listing. */
router.get('/', function (req, res, next) {
  res.send(gen.liste_appareils);
});

router.get('/:id', function (req, res, next) {
  res.send(gen.liste_appareils[req.params.id]);
});

module.exports = router;
