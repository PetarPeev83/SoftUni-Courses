function factorial(input) {

    let num = Number(input[0])
    let num2 = 1;

    for (i = 1; i <= num; i++) {
        num2 *= i;
    }
    console.log(num2)
}
factorial(['8'])