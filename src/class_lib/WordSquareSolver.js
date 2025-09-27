const CharsPool = require("./CharsPool");

class WordSquareSolver {
    constructor(n, string, wordDict) {
        this.n = n;
        this.inputPool = new CharsPool(string);
        this.wordDict = wordDict
    }

    static printGrid = (grid = []) => {
        if (grid.length < 1) console.log(`No results for the given input!`);
        for (let i = 0; i < grid.length; i++) {
            console.log(grid[i].split("").join(" "));
        }
        console.log()
    }

    * _solveWordSquare() {
        const grid = [];
        function* backtrack(rowIndex, n) {
            if (rowIndex == n) {
                if (this.inputPool.size() == 0) {
                    yield [...grid];
                }
                return;
            }
            let prefix = "";
            for (let i = 0; i < n; i++) { // loop column
                if (grid[i] && grid[i][rowIndex]) {
                    prefix += grid[i][rowIndex];
                }
            }

            for (let word of this.wordDict.getWordsWithPrefix(prefix)) {
                if (!this.inputPool.hasWord(word)) continue;
                grid.push(word);
                this.inputPool.removeWord(word);

                yield* (backtrack.bind(this)(rowIndex + 1, this.n));

                grid.pop();
                this.inputPool.addWord(word);
            }
        }
        yield* backtrack.bind(this)(0, this.n);
    }

    getFirstSolution = () => {
        const iterator = this._solveWordSquare();
        const { value } = iterator.next();
        return value;
    }

    getLastSolution = () => {
        const results = [];
        for (let r of this._solveWordSquare()) results.push(r);
        return results.pop() || [];
    }

    getAllsolutions = () => {
        const results = [];
        for (let r of this._solveWordSquare()) results.push(r);
        return results;
    }
}

module.exports = WordSquareSolver;