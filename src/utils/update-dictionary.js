const axios = require("axios");
const fs = require("fs").promises;
const { DICTIONARY_FILE_PATH, DICTIONARY_URL } = require("../config");

const updateDictionary = async () => {
    const { data } = await axios.get(DICTIONARY_URL);
    await fs.writeFile(DICTIONARY_FILE_PATH, data);
}

try {
    updateDictionary();
    console.log(`Dictionary successfully updated from ${DICTIONARY_FILE_PATH}`);
} catch {
    console.error(`Something went wrong while updating the dictionary!`);
}