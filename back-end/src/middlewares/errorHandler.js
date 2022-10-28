const errorHandler = (error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status).json({ error: error.message });
  }
  return res.status(500).json({ error: error.message });
};

module.exports = { errorHandler };