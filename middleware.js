// backend/middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');
const config = require('../config');

exports.authenticateUser = (req, res, next) => {
  // Check for token in headers
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, config.jwtSecret);

    // Add user from payload
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

exports.authenticateAdmin = (req, res, next) => {
  // Check for token in headers
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, config.jwtSecret);

    // Check if user is admin
    if (!decoded.user.isAdmin) {
      return res.status(403).json({ msg: 'Unauthorized' });
    }

    // Add user from payload
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
