const fs = require("fs");
const readline = require("readline");

const Tries = require("../class_lib/Trie");
const { DICTIONARY_FILE_PATH } = require('../config');

const countCharOccurance = (word) => {
    const occurance = new Array(26).fill(0);

    for (let char of word) {
        let idx = char.charCodeAt(0) - "a".charCodeAt(0);
        occurance[idx]++;
    }
    return occurance;
}

/**
 * 
 * @param {*} textfile 
 * @returns {Promise<{wordDict: Tries, occuranceCounter: Array}>}}
 */
const initialiseDictionary = (n = 4, textfile = DICTIONARY_FILE_PATH) => {

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
                if (word.length == n){
                    occuranceCounter[word] = countCharOccurance(word);
                    wordDict.insertWord(word);
                }
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