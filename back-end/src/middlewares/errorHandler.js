const errorMiddleware = (err, _req, res, next) => {
  res.status(err.status || 500)
    .json({ message: err.message || 'Internal server error' });
  return next();
};

module.exports = errorMiddleware;