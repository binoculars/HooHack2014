var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('mobile', { title: 'Mobile' });
});

module.exports = router;
