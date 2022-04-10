const { generateJwt } = require('../utils/jsonwebtoken');

const signin = (req, res, next) => {
  const { email, password } = req.body;

  console.log(email, password);

  if (email !== 'astritspanca23@gmail.com' || password !== '1234') {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = generateJwt({ email, password });

  res.status(200).json({ token });
};

module.exports = {
  signin,
};
