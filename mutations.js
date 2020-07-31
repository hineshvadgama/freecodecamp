function mutation(arr) {

    let arr1 = arr[0].toLowerCase();
    let arr2 = arr[1].toLowerCase();
    
    arr1 = arr1.split('');
    arr2 = arr2.split('');
    
    let doesIncludeAll = true;

    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            doesIncludeAll = false;
        }
    }

    return doesIncludeAll;
}

mutation(["hello", "hey"]);
