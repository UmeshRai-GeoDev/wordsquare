package com.umesh.wordsquare;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

final class TrieTest {
        private static Trie dictionary;

        @BeforeAll
        static void setup() {
                dictionary = Utils.initialiseDictionary(0);
        }

        @Test
        void containsApple() {
                assertTrue(dictionary.contains("apple"));
        }

        @Test
        void containsLastWord() {
                assertTrue(dictionary.contains("zyzzyvas"));
        }

        @Test
        void containsLongWord() {
                assertTrue(dictionary.contains("acetylcholinesterases"));
        }

        @Test
        void doesNotContainTypo() {
                assertFalse(dictionary.contains("appple"));
        }

        @Test
        void doesNotContainIncompleteWord() {
                assertFalse(dictionary.contains("ap"));
        }

        @Test
        void canFindWordsWithPrefix() {
                assertEquals(308, dictionary.getWordsWithPrefix("app").size(), "Incorrect number of words received");
        }

}
