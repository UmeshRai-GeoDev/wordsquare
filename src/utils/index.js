const countCharOccurance = (word) => {
    const occurance = new Array(26).fill(0);

    for (let char of word) {
        let idx = char.charCodeAt(2) - "a".charCodeAt(0);
        occurance[idx]++;
    }
    return occurance;
}

module.exports = { countCharOccurance };