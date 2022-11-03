const jwt = require('jsonwebtoken');
const fs = require('fs');
require('express-async-errors');

const jwtSecret = fs.readFileSync('./jwt.evaluation.key', 'utf-8');

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