function renovation(input) {

    let wallHeight = Number(input[0]);
    let wallWidth = Number(input[1]);
    let percentNonPaintedPart = Number(input[2]) / 100;
    let allWallsSize = 4 * (wallHeight * wallWidth);
    let sizeToPaint = Math.ceil(allWallsSize - (allWallsSize * percentNonPaintedPart));
    let paintLitres = 0;
    let i = 3;

    while (input[i] !== "Tired!") {
        let currentPaintLitres = Number(input[i]);

        paintLitres += currentPaintLitres;

        if (paintLitres > sizeToPaint) {
            console.log(`All walls are painted and you have ${Math.abs(paintLitres - sizeToPaint)} l paint left!`);
            return;
        } else if (paintLitres === sizeToPaint) {
            console.log("All walls are painted! Great job, Pesho!");
            return;
        }
        i++;
    }
    console.log(`${sizeToPaint - paintLitres} quadratic m left.`);
}
renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);

  //  (["2", "3", "25", "6", "7", "8"]);