const { initialiseDictionary } = require("./utils/init-trie");

(async () => {
    const wordDict = await initialiseDictionary();
    console.log(wordDict.contains("abhorred"));

})();

