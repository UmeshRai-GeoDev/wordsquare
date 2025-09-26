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

    // init grid n*n grid

    const isValid = (grid, idx) => {
        if (idx == 0) return true;
        const colwords = [];
        for (let col = 0; col < n; col++) {
            let tmpString = "";
            for (let row = 0; row < grid.length; row++) {
                tmpString += grid[row][col];
            }
            colwords.push(tmpString);
        }
        // debugger;
        for (let word of colwords) {
            if (!wordDict.isPotential(word)) {
                return false;
            }
        }
        debugger
        return true;
    }

    const grid = [];

    function recurse(grid, inputIndex = 0) {
        if (inputIndex == n) {
            console.log(grid)
            return grid;
        }
        for (let i = inputIndex; i < possibleWords.length; i++) {
            if (!isValid(grid, i)) {
                return
            }
            grid.push(possibleWords[i]);
            recurse(grid, i + 1);
            grid.pop();
            recurse(grid, i + 1);
        }
    }

    recurse(grid);
    // console.log(grid);

})();

