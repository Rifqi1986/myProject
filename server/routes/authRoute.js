const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', AuthController.login);

router.get('/admin', (req, res) => {
  if (!req.session.user || req.session.user.role !== 'admin') {
    res.status(403).send({ error: 'Access denied' });
  } else {
    res.render('auth/admin');
  }
});

router.get('/user', (req, res) => {
  if (!req.session.user || req.session.user.role !== 'user') {
    res.status(403).send({ error: 'Access denied' });
  } else {
    res.render('auth/user');
  }
});

module.exports = router;