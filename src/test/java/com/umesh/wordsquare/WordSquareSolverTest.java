package com.umesh.wordsquare;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;

final class WordSquareSolverTest {
    private WordSquareSolver solver;
    private static Trie dictionary;

    @Test
    void invalidInput() {
        dictionary = Utils.initialiseDictionary(4);
        solver = new WordSquareSolver(4, "eedd", dictionary);
        assertEquals(solver.getAllSolution().size(), 0, "No valid solution expected!");
    }

    @Test
    void solve4n() {
        dictionary = Utils.initialiseDictionary(4);
        solver = new WordSquareSolver(4, "eeeeddoonnnsssrv", dictionary);

        List<String> expectedSolution = Arrays.asList(
                "rose",
                "oven",
                "send",
                "ends");

        assertEquals(
                expectedSolution,
                solver.getLastSolution(), "Unexpected solution for input \"4 eeeeddoonnnsssrv\"!");
    }

    @Test
    void solve5n() {
        dictionary = Utils.initialiseDictionary(5);
        solver = new WordSquareSolver(5, "aaaeeeefhhmoonssrrrrttttw", dictionary);

        List<String> expectedSolution = Arrays.asList(
                "feast",
                "earth",
                "armor",
                "stone",
                "threw");

        assertEquals(
                expectedSolution,
                solver.getLastSolution(), "Unexpected solution for input \"5 aaaeeeefhhmoonssrrrrttttw\"!");

        assertEquals(solver.getAllSolution().size(), 2, "Two valid solutions were expected!");

        // Additional test case
        solver = new WordSquareSolver(5, "aabbeeeeeeeehmosrrrruttvv", dictionary);
        expectedSolution = Arrays.asList(
                "heart",
                "ember",
                "above",
                "revue",
                "trees");
        assertEquals(
                expectedSolution,
                solver.getLastSolution(), "Unexpected solution for input \"5 aabbeeeeeeeehmosrrrruttvv\"!");
    }

    @Test
    void solve7n() {
        dictionary = Utils.initialiseDictionary(7);
        solver = new WordSquareSolver(7, "aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy", dictionary);

        List<String> expectedSolution = Arrays.asList(
                "bravado",
                "renamed",
                "analogy",
                "valuers",
                "amoebas",
                "degrade",
                "odyssey");

        assertEquals(
                expectedSolution,
                solver.getLastSolution(),
                "Unexpected solution for input \"7 aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy\"!");
    }

}
