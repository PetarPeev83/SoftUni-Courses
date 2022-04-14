function nameGame(input) {

    let name = input.shift();
    let winner = "";
    let pointsWinner = 0;

    while (name !== "Stop") {

        let points = 0;

        for (let i = 0; i < name.length; i++) {

            let currentNumber = Number(input.shift());

            if (currentNumber === name.charCodeAt(i)) {
                points += 10;
            } else {
                points += 2;
            }
        }
        if (points >= pointsWinner) {
            winner = name;
            pointsWinner = points;
        }
        name = input.shift();
    }
    console.log(`The winner is ${winner} with ${pointsWinner} points!`);
}
nameGame(["Pesho", "124", "34", "111", "97", "99", "Gosho", "98", "124", "88", "76", "18", "Stop"]);


   // (["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);