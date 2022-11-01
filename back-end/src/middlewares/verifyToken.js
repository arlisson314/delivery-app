const jwt = require('jsonwebtoken');
require('dotenv/config');

const jwtSecret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decodedToken = jwt.verify(token, jwtSecret);
    req.user = decodedToken;
    return next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};