function rotateArray(input) {

    let rotations = Number(input.pop());
    let rotateArray = input;

    for (let i = 0; i < rotations; i++) {
        let element = input.pop();
        rotateArray.unshift(element);
    }
    console.log(rotateArray.join(" "));
}
// rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);