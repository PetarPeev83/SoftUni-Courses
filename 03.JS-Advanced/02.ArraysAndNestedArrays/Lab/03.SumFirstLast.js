function sumFirstLast(input) {

    let first = Number(input[0]);
    let last = Number(input.slice(-1));
    return first + last;
    // console.log(last + first);
}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);