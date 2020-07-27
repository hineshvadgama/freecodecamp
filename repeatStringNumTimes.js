function repeatStringNumTimes(str, num) {

    let str2 = "";

        for (let i = 0; i < num; i++) {
            str2 = str2.concat(str);
        }
        
    return str2;
}

repeatStringNumTimes("abc", 3);
