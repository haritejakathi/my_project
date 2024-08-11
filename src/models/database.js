const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/sqlite.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS assignments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT
  )`);
});

module.exports = db;
