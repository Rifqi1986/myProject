const User = require('../models/authModel');

class AuthController {
  async login(req, res, next) {
    const { username, password } = req.body;
    try {
      const user = await User.findByUsername(username);
      if (!user) {
        throw new Error('Invalid username or password');
      }
      const isValidPassword = await User.validatePassword(password, user.password);
      if (!isValidPassword) {
        throw new Error('Invalid username or password');
      }
      req.session.user = user;
      res.redirect(`/${user.role}`);
    } catch (err) {
      res.status(401).send({ error: 'Invalid username or password' });
    }
  }
}

module.exports = AuthController;