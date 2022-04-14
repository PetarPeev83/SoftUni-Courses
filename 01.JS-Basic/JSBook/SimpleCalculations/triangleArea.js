function triangleArea(input) {

    let a = input[0];
    let h = input[1];
    let area = a * h / 2;

    console.log("Triangle area = " + area.toFixed(2));

}
triangleArea([20, 30])