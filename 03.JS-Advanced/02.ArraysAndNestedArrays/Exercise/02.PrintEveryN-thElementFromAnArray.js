function printhNthElement(elements, n) {
    let output = [];
    for (let i = 0; i < elements.length; i += n) {
        output.push(elements[i]);
    }
    // console.log(output);
    return output;
}
printhNthElement(['5', '20', '31', '4', '20'], 2);
// printhNthElement(['dsa', 'asd', 'test', 'tset'], 2);
// printhNthElement(['1', '2', '3', '4', '5'], 6);