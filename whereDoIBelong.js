function getIndexToIns(arr, num) {

    arr.sort((a, b) => a - b);
    let index = 0;

    for (index; index < arr.length; index++) {

        if (num <= arr[index]) {
            break;
        }

    }
    
    return index;
}

getIndexToIns([5, 3, 20, 3], 5);
