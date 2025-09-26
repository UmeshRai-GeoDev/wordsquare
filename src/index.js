const { initialiseDictionary } = require("./utils/init-trie");

(async () => {
    
    const { wordDict, occuranceCounter } = await initialiseDictionary();
    console.log(Object.entries(occuranceCounter).length)
})();

