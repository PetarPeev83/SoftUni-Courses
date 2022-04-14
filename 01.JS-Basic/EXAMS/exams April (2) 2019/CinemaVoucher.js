function cinemaVoucher(input) {

    let vaucherPrice = Number(input[0]);
    let index = 1;
    let movieCounter = 0;
    let otherPurchasesCounter = 0;
    let purchase = input[1];

    while (purchase !== "End") {

        if (purchase.length > 8) {

            vaucherPrice -= (purchase.codePointAt(0) + purchase.codePointAt(1));
            if (vaucherPrice < 0) {
                break;
            }
            movieCounter++;
        } else {
            vaucherPrice -= purchase.codePointAt(0);
            if (vaucherPrice < 0) {
                break;
            }
            otherPurchasesCounter++;
        }
        index++;
        purchase = input[index];
    }
    console.log(movieCounter);
    console.log(otherPurchasesCounter);
}
cinemaVoucher(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"])

//(["300", "Captain Marvel", "popcorn", "Pepsi"])