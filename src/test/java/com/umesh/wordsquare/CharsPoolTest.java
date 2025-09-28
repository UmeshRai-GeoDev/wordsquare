package com.umesh.wordsquare;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

final class CharsPoolTest {
    CharsPool myPool;

    @BeforeEach
    void setup() {
        myPool = new CharsPool("hello");
    }

    @Test
    void poolHasValidWord() {
        assertTrue(myPool.hasWord("hello"));
    }

    @Test
    void poolCanAddWord() {
        assertFalse(myPool.hasWord("world"));
        myPool.addWord("world");
        assertTrue(myPool.hasWord("world"));
    }

    @Test
    void poolCanDeleteWord() {
        myPool.removeWord("hello");
        assertFalse(myPool.hasWord("hello"));
    }

}
