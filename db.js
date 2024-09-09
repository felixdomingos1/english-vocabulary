const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
async function copyFile(sourcePath, destinationPath) {
  try {
    await new Promise((resolve, reject) => {
      fs.copyFile(sourcePath, destinationPath, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
    console.log('File copied successfully.');
  } catch (err) {
    console.error('Error:', err);
  }
}
const initProgress = async () => {
  // Usage example
  await copyFile('sqlite3/dictionary.db', 'progress/progress.db').then(() => {
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
            console.log("Completed");
            db.close();
          }
        });
      }
    });

      // Close the database
    })
    .catch((err) => {
      console.error('Error:', err);
    });
}

initProgress();