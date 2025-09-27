const CharsPool = require("./class_lib/CharsPool");
const { countCharOccurance } = require("./utils");
const { initialiseDictionary } = require("./utils/dictionary-init");

// temp var 
const n = 4, inputString = "aaccdeeeemmnnnoo";
const MAX_CHAR_COUNT = 26;

const inputPool = new CharsPool(inputString);

(async () => {
    const { wordDict } = await initialiseDictionary(n);
    const grid = [];

    function backtrack(rowIndex) {
        if (rowIndex == n) {
            if (inputPool.size() == 0) {
                return grid;
            }
        }
        let prefix = "";
        for (let i = 0; i < n; i++) { // loop column
            if (grid[i] && grid[i][rowIndex]) {
                prefix += grid[i][rowIndex];
            }
        }

        for (let word of wordDict.getWordsWithPrefix(prefix)) {
            if (!inputPool.hasWord(word)) continue;
            grid.push(word);
            inputPool.removeWord(word);

            if (backtrack(rowIndex + 1)) {
                return grid;
            }

            grid.pop();
            inputPool.addWord(word);
        }
    }
    backtrack(0);

    for (let i = 0; i < grid.length; i++) {
        console.log(grid[i].split("").join(" "));
    }
    console.log()
})();

