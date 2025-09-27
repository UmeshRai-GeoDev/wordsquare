package com.umesh.wordsquare;

import java.util.HashMap;
import java.util.Map;

class CharsPool {
    private Map<Character, Integer> pool = new HashMap<>();
    private int remaining = 0;

    public CharsPool(String inputCharactersAsString) {
        this.addWord(inputCharactersAsString);
    }

    int size() {
        return this.remaining;
    }

    public void addWord(String newWord) {
        for (char c : newWord.toCharArray()) {
            pool.merge(c, 1, (count, c2) -> count + 1);
            this.remaining++;
        }
    }

    public boolean hasWord(String word) {
        Map<Character, Integer> counter = new HashMap<>();
        for (char c : word.toCharArray()) {
            counter.merge(c, 1, (count, c2) -> count + 1);
        }
        for (char c : word.toCharArray()) {
            if (!this.pool.containsKey(c))
                return false;
            if (counter.get(c) > this.pool.get(c))
                return false;
        }
        return true;
    }

    public void removeWord(String word) {
        if (!this.hasWord(word)) {
            return;
        }
        // if(!this.hasWord(word)){throw(new Error("Not engough chars remaining"))}
        for (char c : word.toCharArray()) {
            this.pool.put(c, this.pool.get(c) - 1);
            this.remaining--;
        }
    }
}