function multiplicationTable(number) {

    for (let times = 1; times <= 10; times++) {
        let result = number * times;
        console.log(`${number} X ${times} = ${result}`);
    }
}
multiplicationTable(5);
multiplicationTable(2);