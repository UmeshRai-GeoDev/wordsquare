package com.umesh.wordsquare;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;

public final class Utils {
    public static final String DICTIONARY_URL =
            "https://norvig.com/ngrams/enable1.txt";

    public static Trie initialiseDictionary(int n) {
        Trie wordDict = new Trie();
        try (InputStream resource = App.class.getResourceAsStream("/assets/dictionary.txt")) {
            BufferedReader reader = new BufferedReader(new InputStreamReader(resource, StandardCharsets.UTF_8));
            String line;
            while ((line = reader.readLine()) != null) {
                if (n != 0 && line.length() != n) {
                    continue;
                }
                wordDict.insertWord(line);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return wordDict;
    }

}