class Trie {
    isWordEnded;
    children;

    constructor() {
        this.isWordEnded = false;
        this.children = new Array(26); // currently dictionary only contains lowercase alphabets
    }

    static indexOf(char) {
        return char.charCodeAt(0) - "a".charCodeAt(0);
    }
    /**
     * @param word string
     */
    insertWord = (word, root = this) => {
        for (let i = 0; i < word.length; i++) {
            const j = Trie.indexOf(word[i])
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
            const j = Trie.indexOf(word[i]);
            if (!root.children[j]) {
                return false;
            }
            root = root.children[j];
        }
        return root.isWordEnded;
    }
    /**
     * @param word string
     */
    isPotential = (word, root = this) => {
        for (let i = 0; i < word.length; i++) {
            const j = Trie.indexOf(word[i])
            if (!root.children[j]) {
                return false;
            }
            root = root.children[j];
        }
        return true;
    }

    getWordsWithPrefix = (prefix, root = this) => {
        if (!this.isPotential(prefix)) return [];
        for (let char of prefix) {
            const j = Trie.indexOf(char);
            root = root.children[j];
        }
        const output = [];
        this._collect(root, prefix, output);
        return output;

    }

    _collect(node, path, out) {
        if (node.isWordEnded) out.push(path);
        for (let j = 0; j < 26; j++) {
            const child = node.children[j];
            debugger
            if (child) this._collect(child, path + String.fromCharCode(97 + j), out);
        }
    }
}

module.exports = Trie;

