function findLongestWordLength(str) {

    let stringAsArray = str.split(' ');
    let lengthOfLongestWord = 0;

    for (let i = 0; i < stringAsArray.length; i++) {
        if (stringAsArray[i].length > lengthOfLongestWord) {
            lengthOfLongestWord = stringAsArray[i].length;
        }
    }

    return lengthOfLongestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
