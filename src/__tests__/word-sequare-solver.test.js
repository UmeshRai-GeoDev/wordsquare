
const { initialiseDictionary } = require("../utils/dictionary-init");
const WordSquareSolver = require("../class_lib/WordSquareSolver");
let dictionary;

beforeAll(async () => {
    const { wordDict } = await initialiseDictionary(4);
    dictionary = wordDict;
});

describe("WordSquareSolver", () => {
    it('should solver "4 eeeeddoonnnsssrv"', () => {
        let solver = new WordSquareSolver(4, "eeeeddoonnnsssrv", dictionary);
        expect(solver.getAllsolutions()).toEqual(expect.arrayContaining([[
            "rose",
            "oven",
            "send",
            "ends"
        ]]))
    });
    it('should get first result', () => {
        let solver = new WordSquareSolver(4, "eeeeddoonnnsssrv", dictionary);
        expect(solver.getFirstSolution()).toEqual(expect.arrayContaining(["rose", "oven", "send", "ends"]));
    });

    it('should get all possible solutions ', () => {
        solver = new WordSquareSolver(4, "aaccdeeeemmnnnoo", dictionary);
        expect(solver.getAllsolutions()).toEqual(expect.arrayContaining([[
            "moan",
            "once",
            "acme",
            "need"
        ]]))
    });
});
