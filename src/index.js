const Tries = require("./class_lib/Trie");
const fs = require("fs");
const readline = require("readline");
const { DICTIONARY_FILE_PATH } = require('./config')

const wordDict = new Tries();

// Loading raw dictionary into prefix tree
const rl = readline.createInterface({
    input: fs.createReadStream(DICTIONARY_FILE_PATH),
    crlfDelay: Infinity
})

rl.on("line", (word) => {
    wordDict.insertWord(word);
});

rl.on("close", () => {
    console.log("Finished loading words from dict");
    console.log("Running the programme");
    main();
});

const main = () => {
    console.log(wordDict.contains("abhorred"));
}