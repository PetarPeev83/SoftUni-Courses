function weddingSeats(input) {

    let lastSector = String(input[0]);
    let rowsInSector = Number(input[1]);
    let numberOddseats = Number(input[2]);
    let numberEvenSeats = Number(input[2]) + 2;

    let counter = 0;
    let sectors = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let seats = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let go = true;
    let i = 0;

    while (go) {
        if (sectors[i] === lastSector) {
            go = false;
        }
        for (let d = 1; d <= rowsInSector; d++) {
            if (d % 2 !== 0) {
                for (let m = 0; m < numberOddseats; m++) {
                    console.log(`${sectors[i]}${d}${seats[m]}`);
                    counter++;
                }
            } else if (d % 2 === 0) {
                for (let p = 0; p < numberEvenSeats; p++) {
                    console.log(`${sectors[i]}${d}${seats[p]}`);
                    counter++;
                }
            }
        }
        rowsInSector++;
        i++;
    }
    console.log(counter);
}
weddingSeats(["C", "4", "2"])