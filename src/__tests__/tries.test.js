
const { initialiseDictionary } = require("../utils/dictionary-init");
let dictionary;

beforeAll(async () => {
    const { wordDict } = await initialiseDictionary(30);
    dictionary = wordDict;
});

describe("Dictionary", () => {
    it("shoud contain apple", () => {
        expect(dictionary.contains("apple")).toBe(true);
    });
    it("should contain the last item from the text file", () => {
        expect(dictionary.contains("zyzzyvas")).toBe(true);
    });
    it("should contain a long word from the dictionary", () => {
        expect(dictionary.contains("acetylcholinesterases")).toBe(true);
    });
    it("should not contain word with type", () => {
        expect(dictionary.contains("appple")).toBe(false);
    });
    it("should not contain numeric character", () => {
        expect(dictionary.contains("app1e")).toBe(false);
    });
    it("should not contain space", () => {
        expect(dictionary.contains(" ")).toBe(false);
    });
    it("should throw error with incomplete word", () => {
        expect(dictionary.contains("ap")).toBe(false);
    });
});
