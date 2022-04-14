function fiveSpecialLetters(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let specialLetters = ['a', 'b', 'c', 'd', 'e'];

    let weightA = 5;
    let weightB = -12;
    let weightC = 47;
    let weightD = 7;
    let weightE = -32;

    let finalLetterCombination = "";

    for (let o = 0; o < 5; o++) {
        let first = specialLetters[o];
        for (let p = 0; p < 5; p++) {
            let second = specialLetters[p];
            for (let q = 0; q < 5; q++) {
                let third = specialLetters[q];
                for (let s = 0; s < 5; s++) {
                    let fourth = specialLetters[s];
                    for (let m = 0; m < 5; m++) {
                        let fifth = specialLetters[m];

                        // let currentLettersCombination = first + second + third + fourth + fifth;

                        let specialLettersCombination = first;

                        if (specialLettersCombination.indexOf(second) === -1) {
                            specialLettersCombination += second;
                        } if (specialLettersCombination.indexOf(third) === -1) {
                            specialLettersCombination += third;
                        } if (specialLettersCombination.indexOf(fourth) === -1) {
                            specialLettersCombination += fourth;
                        } if (specialLettersCombination.indexOf(fifth) === -1) {
                            specialLettersCombination += fifth;
                        }
                        // Методът indexOf(…) връща индекса на конкретния елемент, ако бъде намерен или -1, 
                        //ако елементът не бъде намерен. Следователно всеки път, когато получим -1, ще означава, 
                        //че все още нямаме тази буква в новия низ с уникални букви и можем да я добавим, 
                        //а ако получим стойност различна от -1, ще означава, че вече имаме буквата и няма да я добавяме.

                        finalLetterCombination += specialLettersCombination + " ";
                    }
                }
            }
        }
    }

    console.log(finalLetterCombination);
}
fiveSpecialLetters(["40", "42"])




//let specialLettersCombination = "";
//
//for (let i = 0; i < 5; i++) {
//
//    let currentLetter = specialLetters[i];
//
//    if (currentLetter !== specialLettersCombination[0] &&
//        currentLetter !== specialLettersCombination[1] &&
//        currentLetter !== specialLettersCombination[2] &&
//        currentLetter !== specialLettersCombination[3] &&
//        currentLetter !== specialLettersCombination[4]) {
//            specialLettersCombination += currentLetter;
//        }
//}