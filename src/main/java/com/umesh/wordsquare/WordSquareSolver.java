package com.umesh.wordsquare;

import java.lang.StringBuilder;
import java.util.ArrayList;

public class WordSquareSolver {

    private int n;
    private final CharsPool inputPool;
    private final Trie wordDict;
    private final ArrayList<ArrayList<String>> result;

    WordSquareSolver(int n, String input, Trie wordDict) {
        this.n = n;
        this.inputPool = new CharsPool(input);
        this.wordDict = wordDict;
        this.result = new ArrayList<ArrayList<String>>();
        this.solve();

    }

    static void printGrid(ArrayList<String> grid) {
        if (grid.isEmpty()) {
            System.out.println("No results for the given input!");
        }

        for (String word : grid) {
            System.out.println(
                    String.join(" ", word.split("")));
        }
        System.out.println();
    }

    private void solve() {
        ArrayList<String> grid = new ArrayList<String>();
        backtrack(0, grid);
    }

    private ArrayList<String> backtrack(int rowIndex, ArrayList<String> grid) {
        StringBuilder prefixBuilder = new StringBuilder();
        String prefix = "";

        if (rowIndex == this.n) {
            if (inputPool.size() == 0) {
                this.result.add(new ArrayList<String>(grid));
                return grid;
            }
            return null;
        }
        for (int i = 0; i < rowIndex; i++) {
            prefixBuilder.append(grid.get(i).charAt(rowIndex));
        }
        prefix = prefixBuilder.toString();
        for (String word : this.wordDict.getWordsWithPrefix(prefix)) {
            if (!inputPool.hasWord(word)) {
                continue;
            }
            grid.add(word);
            inputPool.removeWord(word);

             backtrack(rowIndex + 1, grid);

            grid.removeLast();
            inputPool.addWord(word); // put the word back when backtracking

        }
        return grid;
    }

    public ArrayList<String> getFirstSolution() {
        return result.getFirst();
    }

    public ArrayList<String> getLastSolution() {
        return result.getLast();
    }

    public ArrayList<ArrayList<String>> getAllSolution() {
        return result;
    }

}
