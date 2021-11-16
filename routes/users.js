var express = require('express');
const usuarioController = require('../controllers/usuarioController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource', usuarioController.index);
});

module.exports = router;
