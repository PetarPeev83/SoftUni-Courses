function maxNumber(input) {

    //     let toPrint = "";

    //     for (let i = 0; i < input.length; i++) {
    //         let currentNum = Number(input[i]);
    //         let isBigger = true;
    //         for (let j = i + 1; j < input.length; j++) {
    //             let nextNum = Number(input[j]);
    //             if (currentNum <= nextNum) {
    //                 isBigger = false;
    //                 break;
    //             }
    //         } if (isBigger) {
    //             toPrint += currentNum + " ";
    //         }
    //     }
    //     console.log(toPrint);


    let toPrint = [];

    for (let i = 0; i < input.length; i++) {

        let currentNum = Number(input[i]);
        let isBigger = true;

        for (let j = i + 1; j < input.length; j++) {

            let nextNum = Number(input[j]);

            if (currentNum <= nextNum) {
                isBigger = false;
                break;
            }
        } if (isBigger) {
            toPrint.push(currentNum);
        }
    }
    console.log(toPrint.join(" "));
}
// maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);