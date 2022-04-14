function maxSequenceOfEqualElements(input) {

    let maxSequence = "";
    let counter = 0;
    let currentCounter = 0;
    let currentSequence = "";

    for (let i = 0; i < input.length; i++) {
        let element = input[i];

        if (input[i + 1] === element) {
            if (currentCounter === 0) {
                currentSequence = element + " ";
            }
            currentCounter++;
            currentSequence += element + " ";
        } else {
            currentCounter = 0;
            currentSequence = "";
        }
        if (currentCounter > counter) {
            maxSequence = currentSequence;
            counter = currentCounter;
        }
    }
    console.log(maxSequence);
}
// maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequenceOfEqualElements([4, 4, 4, 4]);
// maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);