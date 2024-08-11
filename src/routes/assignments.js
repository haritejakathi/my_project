const express = require('express');
const db = require('../models/database');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
  db.all('SELECT * FROM assignments', [], (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

router.post('/', authenticateToken, (req, res) => {
  const { title, description } = req.body;
  db.run('INSERT INTO assignments (title, description) VALUES (?, ?)', [title, description], function(err) {
    if (err) throw err;
    res.json({ id: this.lastID });
  });
});

module.exports = router;
