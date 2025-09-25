class Trie {
    ended = false;
    children;

    constructor() {
        this.children = new Array(256);
    }
    /**
     * @param word string
     */
    insertWord = (word, root = this) => {
        for (let i = 0; i < word.length; i++) {
            const j = word.charCodeAt(i) - "a".charCodeAt(0);
            if (!root.children[j]) {
                root.children[j] = new Trie();
                if (i === word.length - 1) {
                    root.ended = true;
                }
            }
            root = root.children[j];
        }
    }

    /**
     * @param word string
     */
    contains = (word, root = this) => {
        for (let i = 0; i < word.length; i++) {
            const j = word.charCodeAt(i) - "a".charCodeAt(0);
            if (!root.children[j]) {
                return false;
            } else {

                root = root.children[j];
            }
        }
        return true;
    }
}

module.exports = Trie;

