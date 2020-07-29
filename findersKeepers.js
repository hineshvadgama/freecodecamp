function findElement(arr, func) {
    
    let num;
    let output;

    for (let i = 0; i < arr.length; i++) {
        num = func(arr[i]);
        if (num == true) {
            output = arr[i];
            break;
        }
    }

    return output;
}

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
