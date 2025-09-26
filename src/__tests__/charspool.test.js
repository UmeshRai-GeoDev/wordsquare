const CharsPool = require("../class_lib/CharsPool");

const myPool = new CharsPool("hello")

describe('CharsPool', () => {
    it('should have hello', () => {
        expect(myPool.hasWord("hello")).toBe(true);
    });
    
    it('should reflect adding a word', () => {
        myPool.addWord("foo");
        expect(myPool.hasWord("foo")).toBe(true);
    });

    it('should reflect deleting a word', () => {
        myPool.removeWord("foo");
        expect(myPool.hasWord("foo")).toBe(false);
    });
});