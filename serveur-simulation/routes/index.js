const express = require('express');
const router = express.Router();

//const Plinthe = require('../appareils/Plinthe.js');
//const Deshumidicateur = require('../appareils/Deshumidificateur.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  const p = "BIENVENUE SUR LE SERVEUR!!!";
  res.send(p);
});







module.exports = router;
