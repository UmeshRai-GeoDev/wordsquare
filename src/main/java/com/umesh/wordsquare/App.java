package com.umesh.wordsquare;

import java.util.ArrayList;

public class App {
    public static void main(String[] args) {
        if (args.length < 2) {
            throw new RuntimeException("Invalid arguments. Please provide both <n> and <characters-as-string>");
        }

        int n = Integer.parseInt(args[0]);
        String input = args[1];
        String mode = args.length == 3 ? args[2] : "";

        Trie wordDict = Utils.initialiseDictionary(n);
        WordSquareSolver solver = new WordSquareSolver(n, input, wordDict);

        switch (mode) {
            case "all":
                ArrayList<ArrayList<String>> solutions = solver.getAllSolution();
                System.out.println("Total solution(s) found: " + solutions.size() + "\n");
                for (ArrayList<String> s : solutions) {
                    WordSquareSolver.printGrid(s);
                }
                break;
            case "last":
                WordSquareSolver.printGrid(solver.getLastSolution());
                break;

            default:
                WordSquareSolver.printGrid(solver.getFirstSolution());
                break;
        }

    }
}
