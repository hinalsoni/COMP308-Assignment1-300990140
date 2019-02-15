let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

router.get('/about', (req, res, next) => {
  res.render('index', { title: 'About Me' });
});

router.get('/contact', (req, res, next) => {
  res.render('index', { title: 'Contact Me' });
});

router.get('/projects', (req, res, next) => {
  res.render('index', { title: 'Projects' });
});

router.get('/services', (req, res, next) => {
  res.render('index', { title: 'Services' });
});

module.exports = router;