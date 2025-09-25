class Trie {
    isWordEnded;
    children;

    constructor() {
        this.isWordEnded = false;
        this.children = new Array(26); // currently dictionary only contains lowercase alphabets
    }
    /**
     * @param word string
     */
    insertWord = (word, root = this) => {
        for (let i = 0; i < word.length; i++) {
            const j = word.charCodeAt(i) - "a".charCodeAt(0);
            if (!root.children[j]) {
                root.children[j] = new Trie();
            }
            root = root.children[j];
        }
        root.isWordEnded = true;
    }

    /**
     * @param word string
     */
    contains = (word, root = this) => {
        for (let i = 0; i < word.length; i++) {
            const j = word.charCodeAt(i) - "a".charCodeAt(0);
            if (!root.children[j]) {
                return false;
            }
            root = root.children[j];
        }
        return root.isWordEnded;
    }
}

module.exports = Trie;

