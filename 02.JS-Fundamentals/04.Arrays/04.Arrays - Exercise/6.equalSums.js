function equalSums(input) {

    let foundEqual = false;

    for (let i = 0; i < input.length; i++) {

        let element = input[i];
        let leftElementSum = 0;
        let rightElementSum = 0;

        for (let j = 0; j < i; j++) {

            let leftElement = input[j];
            leftElementSum += leftElement;
        }
        for (let k = i + 1; k < input.length; k++) {

            let rightElement = input[k];
            rightElementSum += rightElement;
        }
        if (leftElementSum === rightElementSum) {
            console.log(i);
            foundEqual = true;
        }
    }
    if (!foundEqual) {
        console.log("no");
    }
}
// equalSums([1, 2, 3, 3]);
// equalSums([1, 2]);
// equalSums([1]);
// equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);