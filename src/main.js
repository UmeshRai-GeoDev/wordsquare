const { countCharOccurance } = require("./utils");
const { initialiseDictionary } = require("./utils/dictionary-init");

// temp var 
const n = 4, inputString = "eeeeddoonnnsssrv";
const MAX_CHAR_COUNT = 26;

const canCharsBuildValidWord = (inputOccurence, targetOccurence) => {
    for (let i = 0; i < MAX_CHAR_COUNT; i++) {
        if (inputOccurence[i] < targetOccurence[i]) return false;
    }
    return true;
}


(async () => {
    const { wordDict, occuranceCounter } = await initialiseDictionary(n);
    const occuranceOfInputChars = countCharOccurance(inputString);
    const possibleWords = [];
    // Object.entries(occuranceCounter).filter(canCharsBuildValidWord(occuranceOfInputChars, occuranceOfDictionaryWord));

    Object.entries(occuranceCounter).forEach(([word, occuranceOfDictionaryWord]) => {
        if (canCharsBuildValidWord(occuranceOfInputChars, occuranceOfDictionaryWord)) {
            possibleWords.push(word);
        }
    });
    debugger;


    console.log(Object.entries(occuranceCounter).length)
})();

