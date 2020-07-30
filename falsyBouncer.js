function bouncer(arr) {

    let i = arr.length;

    while (i--) {

        if (!Boolean(arr[i])) {
            arr.splice(i, 1);
        }

    }

    return arr;
}

bouncer([7, "ate", "", false, 9]);
