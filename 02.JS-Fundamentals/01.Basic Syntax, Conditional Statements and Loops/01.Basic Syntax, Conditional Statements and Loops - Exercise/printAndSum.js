function printandsum(startNum, endNum) {

    let numbers = "";
    let sum = 0;

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        numbers += " " + i;
    }
    console.log(numbers);
    console.log(`Sum: ` + sum);
}
printandsum(5, 10);
printandsum(0, 26);
printandsum(50, 60);