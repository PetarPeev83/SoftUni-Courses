function lastKNumber(n, k) {
    let output = [1];
    for (let i = 1; i < n; i++) {
        let currentNum = 0;
        for (let num of output.slice(-k)) {
            currentNum += num;
        }
        output.push(currentNum);
    }
   return output;
}
lastKNumber(6, 3);
// lastKNumber(8, 2);