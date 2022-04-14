function amazingNumbers(number) {

    let sum = 0;
    number = String(number);

    for (let i = 0; i < number.length; i++) {
        let currentNum = Number(number[i]);
        sum += currentNum;
    }
    // if (String(sum).includes("9")) {
    //     console.log(`${number} Amazing? True`);
    // } else {
    //     console.log(`${number} Amazing? False`);
    // }
    console.log(`${number} Amazing? ${String(sum).includes("9") ? "True" : "False"}`)
}
amazingNumbers(1233);
amazingNumbers(999);