
import java.lang.StringBuilder;
import java.util.ArrayList;

public class WordSquareSolver {

    private int n;
    private CharsPool inputPool;
    private Trie wordDict;
    private ArrayList<ArrayList<String>> result;

    WordSquareSolver(int n, String input, Trie wordDict) {
        this.n = n;
        this.inputPool = new CharsPool(input);
        this.wordDict = wordDict;
        this.result = new ArrayList<>();
        this.backtrack(0);

    }

    static void printGrid(String[] grid) {
        if (grid.length < 1) {
            System.out.println("No results for the given input!");
        }

        for (String word : grid) {
            System.out.println(
                    String.join(" ", word.split("")));
            System.out.println();
        }
    }

    private ArrayList<String> backtrack(int rowIndex) {
        ArrayList<String> grid = new ArrayList<String>();
        StringBuilder prefixBuilder = new StringBuilder();
        String prefix = "";

        if (rowIndex == this.n) {
            if (inputPool.size() == 0) {
                return grid;
            }
        }

        for (int i = 0; i < this.n; i++) {
            Character c = grid.get(i).toCharArray()[rowIndex];
            if (c != null) {
                prefixBuilder.append(c);
            }
        }
        prefix = prefixBuilder.toString();
        for (String word : this.wordDict.getWordsWithPrefix(prefix)) {
            if (!inputPool.hasWord(word)) {
                continue;
            }
            grid.add(word);
            inputPool.addWord(word);

            if (backtrack(rowIndex + 1) != null) {
                result.add(grid);
            }

            grid.remove(grid.size() - 1);
            inputPool.removeWord(word);

        }
        return null;
    }

    public ArrayList<String> getFirstSolution() {
        return result.get(0);
    }

    public ArrayList<String> getLastSolution() {
        return result.get(result.size() - 1);
    }

    public ArrayList<ArrayList<String>> getAllSolution() {
        return result;
    }

}
