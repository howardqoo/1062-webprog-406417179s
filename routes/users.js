

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/12345678', function(req, res, next) {
  res.render('users', { name:'Howard',title: '12345678' });
});

module.exports = router;
