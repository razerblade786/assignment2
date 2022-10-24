var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Suhaib Siddiqui' });
  res.send('HELLLLLLLLLLLLLLLo World!!!!!!!!!!!!!!!!');
});

router.get('/aboutme', function(req, res, next) {
  res.render('index', { title: 'Express Suhaib Siddiqui' });
  res.send('ABOUT ME!!!!!!!!!!!!!!!!');
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Express Suhaib Siddiqui' });
  res.send('Contact!!!!!!!!!!!!!!!!');
});
module.exports = router;
