function titleCase(str){

    let stringAsArray = str.split(' ');
    let currentWord;
    let currentLetter;
    let newStringAsArray = [];

    for (let i = 0; i < stringAsArray.length; i++) {
        currentWord = stringAsArray[i].replace(stringAsArray[i].charAt(0), stringAsArray[i].charAt(0).toUpperCase());
        
        for (let j = 1; j < currentWord.length; j++) {
            currentWord = currentWord.replace(currentWord.charAt(j), currentWord.charAt(j).toLowerCase());
        }

        newStringAsArray.push(currentWord);
    }

    str = newStringAsArray.join(' ');

    return str;
}

titleCase("I'm a little tea pot");
