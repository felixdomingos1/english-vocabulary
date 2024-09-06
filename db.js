const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
async function copyFile(sourcePath, destinationPath) {
  try {
    fs.copyFile(sourcePath, destinationPath, (err) => {
      if (err) {
        console.error('Error copying file:', err);
      } else {
        console.log('File copied successfully.');   
    
      }
    });
    console.log('File copied successfully.');
  } catch (err) {
    console.error('Error:', err);
  }
}
const initProgress = () => {
  // Usage example
  copyFile('sqlite3/dictionary.db', 'progress/progress.db')
    .then(() => {
      setTimeout(() => {
        const sqlite3 = require('sqlite3').verbose();
        const db = new sqlite3.Database('progress/progress.db');
        const col1 = 'ALTER TABLE entries ADD COLUMN created_at DATETIME NULL';
        const col2 = 'ALTER TABLE entries ADD COLUMN status INTEGER CHECK (status BETWEEN 0 AND 9)';
        db.run(col1, (err) => {
          if (err) {
            console.error('Error adding columns:', err);
          } else {
            db.run(col2, (err) => {
              if (err) {
                console.error('Error adding columns:', err);
              } else {
                console.log("Complete");
                db.close();
              }
            });
          }
        });

      }, 2000);
      // Close the database
    })
    .catch((err) => {
      console.error('Error:', err);
    });
}

initProgress();