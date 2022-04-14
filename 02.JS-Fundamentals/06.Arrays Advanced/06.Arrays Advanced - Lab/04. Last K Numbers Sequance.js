function lastKnumbers(n, k) {

    let output = [1];

    for (let i = 1; i < n; i++) {

        let currentNum = 0;

        for (let num of output.slice(-k)) {
            currentNum += num;
        }
        output.push(currentNum);
    }
    console.log(output.join(" "));
}
lastKnumbers(6, 3);
// lastKnumbers(8, 2);