const jwt = require('jsonwebtoken');

const { TIME } = require('../constants');

const generateJwt = (payload) => {
  return jwt.sign(payload, process.env.APP_SECRET, { expiresIn: TIME.oneDay });
};

const decodeJwt = (payload) => {
  return jwt.decode(payload, process.env.APP_SECRET);
};

module.exports = {
  generateJwt,
  decodeJwt,
};
