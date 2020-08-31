export default input => {
    let wordDict = {};
    let foundMax = ['', 0];
    for(let char of input) {
        wordDict[char] = wordDict[char] + 1 || 1;
        
        if (wordDict[char] > foundMax[1]) {
            foundMax = [char, wordDict[char]];
        }
    }

    return foundMax[0];
};