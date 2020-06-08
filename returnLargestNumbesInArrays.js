function largestOfFour(arr) {

    let arrayOfBiggestNumbers = [];
    let greatestNumberOfSubArray;
    
    for (var i = 0; i < 4; i++) {
        
        greatestNumberOfSubArray = arr[i][0];
        
        for (var j = 1; j < arr[i].length; j++) {
            
            if (arr[i][j] > greatestNumberOfSubArray) {
                greatestNumberOfSubArray = arr[i][j];
            }

        }
        
        arrayOfBiggestNumbers.push(greatestNumberOfSubArray);
    }
    
    return arrayOfBiggestNumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
