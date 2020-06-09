function confirmEnding(str, target) {

    let match = false;
    const stringToMatch = str.slice(str.length - target.length, str.length);

    if (stringToMatch === target) {
        match = true;
    }

    return match;
}
