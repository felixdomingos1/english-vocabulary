const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('sqlite3/dictionary.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the database.');
  // Query data
  db.all("SELECT * FROM entries where word = 'minutiae'", (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(rows);
  });

  // Close the database
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Database closed.');
  });
});