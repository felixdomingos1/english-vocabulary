const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the index.ejs
const db = new sqlite3.Database('progress/progress.db');

app.get('/',  (req, res) => {
   db.all('SELECT count(*) as count FROM entries', (err, rows) => {


    db.all('SELECT distinct word FROM entries', (err, rows) => {
      console.log(rows);
    });


     res.render('index', {wordsCount:rows[0].count});
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
