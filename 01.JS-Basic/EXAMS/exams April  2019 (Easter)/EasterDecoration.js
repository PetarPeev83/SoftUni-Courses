function easterDecoration(input) {

    let customersNum = Number(input[0]);
    let index = 1;
    let totalSum = 0;

    for (let i = 0; i < customersNum; i++) {

        let custumerProductsNum = 0;
        let currentBill = 0;

        while (input[index] !== "Finish") {

            let purchase = input[index];
            custumerProductsNum++;

            switch (purchase) {
                case "basket": currentBill += 1.5; break;
                case "wreath": currentBill += 3.8; break;
                case "chocolate bunny": currentBill += 7; break;
                default: break;
            }
            index++;
        }
        if (custumerProductsNum % 2 === 0) {
            currentBill *= 0.8;
        }
        console.log(`You purchased ${custumerProductsNum} items for ${currentBill.toFixed(2)} leva.`);
        totalSum += currentBill;
        index++;
    }
    console.log(`Average bill per client is: ${(totalSum / customersNum).toFixed(2)} leva.`);
}
easterDecoration(["2", "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"])