const buildError = (code, message) => {
  const newError = new Error(message);
  newError.status = code;
  throw newError;
};

module.exports = { buildError };