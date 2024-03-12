var express = require('express');
var router = express.Router();
var product = 1;
var factor = 1;
factor++;
product *= factor;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  res.send(`Product is: ${product}`);

});

module.exports = router;
