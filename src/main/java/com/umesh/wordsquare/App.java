package com.umesh.wordsquare;

public class App {
    public static int n = 7;
    public static String input = "aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy";
    public static String DICTIONARY_FILE_PATH = "/resources/assets/dictionary.txt";

    public static void main(String[] args) {
        Trie wordDict = Utils.initialiseDictionary(n);
        System.out.println(wordDict.contains("rose"));
        WordSquareSolver solver = new WordSquareSolver(n, input, wordDict);

        for (var sol : solver.getAllSolution()) {
            WordSquareSolver.printGrid(sol);
        }
    }
}
