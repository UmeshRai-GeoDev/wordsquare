const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");

const DICTIONARY_URL = "https://norvig.com/ngrams/enable1.txt";
const DICTIONARY_FILE_PATH = path.join(process.cwd(), "src/assets/dictionary.txt");



const updateDictionary = async () => {
    const { data } = await axios.get(DICTIONARY_URL);
    fs.writeFile(DICTIONARY_FILE_PATH, data);
}

try {
    updateDictionary();
    console.log(`Dictionary successfully updated from ${DICTIONARY_FILE_PATH}`);
} catch {
    console.error(`Something went wrong while updating the dictionary!`);
}