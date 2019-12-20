const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const secret = process.env.JWT_SECRET || 'cookies are delicious';
    jwt.verify(authorization, secret, function(error, decodedToken) {
      if(error) {
        res.status(401).json({ you: 'shall not pass! 💀' });
      } else {
        req.token = decodedToken;
        next();
      }
    })
  } else {
    res.status(400).json({ message: 'Please login and try again!' })
  }
};
