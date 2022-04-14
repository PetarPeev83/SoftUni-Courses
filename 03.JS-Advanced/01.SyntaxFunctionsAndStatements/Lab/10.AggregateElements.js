function aggregateElements(array) {
    console.log(array.reduce((a, b) => a + b)); 5
    console.log(array.map(x => 1 / x).reduce((a, b) => a + b));
    console.log(array.map(x => String(x)).reduce((a, b) => a + b));
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);