class CharsPool {
    constructor(inputCharactersAsString) {
        this.pool = {};
        this.addWord(inputCharactersAsString);
    }

    addWord(newWord) {
        for (let char of newWord) {
            if (this.pool[char]) {
                this.pool[char]++;
            } else {
                this.pool[char] = 1;
            }
        }
    }

    hasWord(word) {
        const counter = word.split("").reduce((acc, d) => ({ [d]: acc[d] + 1 || 1 }), {})
        for (let char of word) {
            if (!this.pool[char]) return false;
            if (counter[char] > this.pool[char]) return false;
        }
        return true;
    }
    removeWord(word) {
        if (!this.hasWord(word)) {
            throw (new Error("Not engough chars remaining"))
        }
        for (let char of word) {
            this.pool[char]--;
        }
    }
}

module.exports = CharsPool;