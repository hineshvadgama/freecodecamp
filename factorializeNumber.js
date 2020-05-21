function factorialize(num) {
    
    let holdingMultiple = 1;
    
    for (let i = 1; i <= num; i++) {
        holdingMultiple = holdingMultiple * i;
    }
    
    num = holdingMultiple
    return num;
}
  
factorialize(5);
