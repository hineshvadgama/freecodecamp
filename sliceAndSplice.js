function frankenSplice(arr1, arr2, n) {
    
    let newArray = [];

    for (let i  = 0;  i < n; i++) {
        newArray.push(arr2[i]);
    }

    for (let j = 0; j < arr1.length; j++) {
        newArray.push(arr1[j]);
    }

    for (let k = n; k < arr2.length; k++) {
        newArray.push(arr2[k]);
    }

    return newArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
