import java.util.ArrayList;
import java.util.List;

public class Trie {
    private static final int MAX_CHARS = 26;
    private static final char BASE_CHAR = 'a';

    private boolean isWordEnded = false;
    private Trie[] children = new Trie[MAX_CHARS];

    public Trie() {
    }

    static int indexOf(char c) {
        return c - BASE_CHAR;
    }

    public void insertWord(String word) {
        word = word.toLowerCase();
        Trie node = this;
        for (char c : word.toCharArray()) {
            int j = indexOf(c);
            if (node.children[j] == null) {
                node.children[j] = new Trie();
            }
            node = node.children[j];
        }
    }

    public boolean contains(String word) {
        Trie root = this;
        for (char c : word.toCharArray()) {
            int j = Trie.indexOf(c);
            if (root.children[c] == null) {
                return false;
            }
            root = root.children[j];
        }
        return root.isWordEnded;
    }

    public boolean isPotential(String word) {
        Trie root = this;
        for (char c : word.toCharArray()) {
            int j = Trie.indexOf(c);
            if (root.children[c] == null) {
                return false;
            }
            root = root.children[j];
        }
        return true;
    }

    public List<String> getWordsWithPrefix(String prefix) {
        ArrayList<String> output = new ArrayList<String>();
        Trie root = this;
        if (isPotential(prefix)) {
            return output;
        }
        for (char c : prefix.toCharArray()) {
            int j = indexOf(c);
            root = root.children[j];
        }
        collect(root, prefix, output);
        return output;
    }

    private void collect(Trie node, String path, ArrayList<String> output) {
        if (node.isWordEnded) {
            output.add(path);
        }

        for (char j = 0; j < MAX_CHARS; j++) {
            Trie child = node.children[j];
            if (child != null) {
                collect(child, path + (char) (j + BASE_CHAR), output);
            }
        }
    }

}
