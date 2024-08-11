const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', (req, res) => {
  const user = { id: 1 }; // Example user
  const token = jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
