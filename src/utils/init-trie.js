const fs = require("fs");
const readline = require("readline");

const Tries = require("../class_lib/Trie");
const { DICTIONARY_FILE_PATH } = require('../config')

const initialiseDictionary = (textfile = DICTIONARY_FILE_PATH) => {

    return new Promise((resolve, reject) => {
        const wordDict = new Tries();
        try {
            // Loading raw dictionary into prefix tree
            const rl = readline.createInterface({
                input: fs.createReadStream(textfile),
                crlfDelay: Infinity
            })

            rl.on("line", (word) => {
                wordDict.insertWord(word);
            });

            rl.on("close", () => {
                // console.log("Finished initialising dictionary object.");
                resolve(wordDict);
            });
        } catch (err) {
            reject(err);
        }
    })
}

module.exports = { initialiseDictionary };