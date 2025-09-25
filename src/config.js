const path = require("path");
const DICTIONARY_URL = "https://norvig.com/ngrams/enable1.txt";
const DICTIONARY_FILE_PATH = path.join(process.cwd(), "src/assets/dictionary.txt");


module.exports = { DICTIONARY_FILE_PATH, DICTIONARY_URL };