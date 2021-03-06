let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('../views/home/index', { title: 'Home' });
});

router.get('/about', (req, res, next) => {
  res.render('../views/aboutme/index', { title: 'About Me' });
});

router.get('/contact', (req, res, next) => {
  res.render('../views/contact/index', { title: 'Contact Me' });
});

router.get('/projects', (req, res, next) => {
  res.render('../views/projects/index', { title: 'Projects' });
});

router.get('/services', (req, res, next) => {
  res.render('../views/services/index', { title: 'Services' });
});

router.get('/contactme', function(req, res, next) {
  res.render('../views/contact/add', { title: 'Fill your details to contact me' });
});
module.exports = router;
