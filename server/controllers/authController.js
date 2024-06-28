const userModel = require('../models/authModel');

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.getUserByUsername(username);

  if (user && user.password === password) {
    // Role based redirection
    if (user.role === 'admin') {
      return res.render('pages/user');
    } else if (user.role === 'user') {
      return res.render('pages/user');
    } else {
      return res.status(403).send('Access Denied');
    }
  } else {
    res.status(401).send('Invalid Credentials');
  }
};

module.exports = {
  login
};