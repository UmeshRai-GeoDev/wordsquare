const fs = require("fs");
const readline = require("readline");

const Tries = require("../class_lib/Trie");
const { DICTIONARY_FILE_PATH } = require('../config');
const { countCharOccurance } = require(".");

/**
 * 
 * @param {*} n 
 * @param {*} textfile 
 * @returns {Promise<{wordDict: Tries, occuranceCounter: Array}>}}
 */
const initialiseDictionary = (n = 0, textfile = DICTIONARY_FILE_PATH) => {

    return new Promise((resolve, reject) => {
        const occuranceCounter = {};
        const wordDict = new Tries();
        try {
            // Loading raw dictionary into prefix tree
            const rl = readline.createInterface({
                input: fs.createReadStream(textfile),
                crlfDelay: Infinity
            });

            rl.on("line", (word) => {
                if (!!n && word.length !== n) return;
                occuranceCounter[word] = countCharOccurance(word);
                wordDict.insertWord(word);
            });

            rl.on("close", () => {
                // console.log("Finished initialising dictionary object.");
                resolve({ wordDict, occuranceCounter });
            });
        } catch (err) {
            reject(err);
        }
    })
}

module.exports = { initialiseDictionary };