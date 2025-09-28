const WordSquareSolver = require("./class_lib/WordSquareSolver");
const { initialiseDictionary } = require("./utils/dictionary-init");

const args = process.argv.slice(2);
const n = +args[0] || 4, inputString = args[1] || "eeeeddoonnnsssrv", mode = args[2] || undefined;

(async () => {
    const { wordDict } = await initialiseDictionary(n);
    const solver = new WordSquareSolver(n, inputString, wordDict);
    let result = [];

    switch (mode) {
        case "all":
            result = solver.getAllsolutions();
            for (let r of result) WordSquareSolver.printGrid(r);
            break;
        case "last":
            result = solver.getLastSolution();
            WordSquareSolver.printGrid(result);
            break;
        default:
            result = solver.getFirstSolution();
            WordSquareSolver.printGrid(result);
            break;
    }
})();

