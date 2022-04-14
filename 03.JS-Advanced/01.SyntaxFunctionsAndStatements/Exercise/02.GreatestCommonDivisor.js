function greatestCommonDivisor(x, y) {

    let minNum = Math.min(x, y);
    for (let i = minNum; i > 0; i--) {
        if (x % i == 0 && y % i ==0){
            console.log(i);
            return;
        }
    }
}
greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);