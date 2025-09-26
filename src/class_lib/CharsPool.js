class CharsPool {
    constructor(inputCharactersAsString) {
        this.pool = {};
        this.remaining = 0;
        this.addWord(inputCharactersAsString);
    }

    size() {
        return this.remaining;
    }

    addWord(newWord) {
        for (let char of newWord) {
            if (this.pool[char]) {
                this.pool[char]++;
            } else {
                this.pool[char] = 1;
            }
            this.remaining++;
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
            this.remaining--;
        }
    }
}

module.exports = CharsPool;