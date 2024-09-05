# Open-Source English Dictionary

An open source English language dictionary with 176,023 definitions. 

This is based on the Source Forge Project: [MySQL English Dictionary ](https://sourceforge.net/projects/mysqlenglishdictionary/), which in turn in based on the [The Online Plain Text English Dictionary (OPTED)](http://www.mso.anu.edu.au/~ralph/OPTED/) dictionary.

OPTED is a public domain English word list dictionary, based on the public domain portion of "The Project Gutenberg e-text of Webster's Unabridged Dictionary" which is in turn based on the 1913 US Webster's Unabridged Dictionary. See [Project Gutenberg](https://www.gutenberg.org/). 

Since the dictionary is based on 1913 edition, it does not include any modern words (Yet!, but in a future release will include the database Princeton University's [WordNet](https://wordnet.princeton.edu/download/current-version).

# Project Goal
I've always been captivated by English literature. Listening to audiobooks while working or driving is a favorite pastime, particularly those from the pre-1990s era. However, I occasionally encounter challenges understanding certain words or the overall context. Puzzlingly, I often miss puns, even when they're clearly part of the narrative. To address this, I believe expanding my vocabulary is essential. A simple approach could involve a system with words, checkboxes, and information buttons. If a word is familiar, I can move on. Otherwise, I'd like to hear its pronunciation and learn its meaning. New words would be flagged for later review to reinforce my understanding.
## IMPORTANT ⚠️

This project is specifically designed for advanced English learners at the C1+ level. It's not intended as a comprehensive language course but rather as a tool to deepen your understanding of the English language. By focusing on nuanced vocabulary, idiomatic expressions, and complex grammatical structures, this resource aims to challenge and stimulate your linguistic growth.

## Data Structure

The dictionary has 3 fields

1. **word**: In lowercase
2. **word type**: Abbreviations describe the type, e.g. verb, noun, etc.
3. **definition**: Definition of the word in sentence case

### Database Schema

The table is named 'entries' and has the following schema

```sqlite
Column      Type             Schema
------      --------------   -------------------------------
word        varchar(25)      "word" varchar(25) NOT NULL
wordtype    varchar(20)      "wordtype" varchar(20) NOT NULL  
definition  text             "definition" text NOT NULL
```

## Dictionary Format & Repository Structure

There are 3 formats available as of now

| Format & Link                                                | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [SQLITE3](https://github.com/UberPython/English-Dictionary-Open-Source/tree/main/sqlite3) | A single file formatted as a SQLITE3 

## Usage Instructions

```bash
npm install
node app.js
```

| Language                                                     | Instructions are available for                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |


## Credits

1. **[Project Gutenberg](https://www.gutenberg.org/)**: For providing the original [1913 US Webster's Unabridged Dictionary](https://www.gutenberg.org/ebooks/29765). Make sure you read the Project Gutenberg's [README](https://www.gutenberg.org/files/29765/29765-ReadMe.txt) for license and other details if you care considering using this for commercial purposes.
2. **[x16bkkamz6rkb78](https://sourceforge.net/u/x16bkkamz6rkb78/profile/)**: For compiling the MySQL dump and releasing on [Source Forge](https://sourceforge.net/projects/mysqlenglishdictionary/).

3. **[dumblob](https://github.com/dumblob)**: For providing the extraordinarily elegant [mysql2sqlite](https://github.com/dumblob/mysql2sqlite) tool for converting the MySQL dump to SQLite3. 
