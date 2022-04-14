function processOddPosition(input) {
    // let output = [];
    // for (let i = 1; i < input.length; i += 2) {
    //     output.unshift(input[i]);
    // }
    // // return output.map(x => x * 2).join(' ');
    // console.log(output.map(x => x * 2).join(' '));

    const oddNumbers = input.filter((x, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(' ');

    console.log(oddNumbers);
}
processOddPosition([10, 15, 20, 25]);
processOddPosition([3, 0, 10, 4, 7, 3]);