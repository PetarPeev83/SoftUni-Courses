function distinctArray(array) {

    let output = [];

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
       if (!output.includes(currentNum)){
        output.push(currentNum);
       }
    }
    console.log(output.join(" "));
}
// distinctArray([1, 2, 3, 4]);
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
// distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
distinctArray([20, 20 , 8, 12, 13, 4, 4, 8, 5 ]);