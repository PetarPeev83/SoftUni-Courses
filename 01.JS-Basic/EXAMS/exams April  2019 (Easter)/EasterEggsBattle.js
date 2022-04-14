function easterEggsBattle(input) {

    let playerOneEggs = Number(input[0]);
    let playerTwoEggs = Number(input[1]);
    let i = 2;

    while (input[i] !== "End of battle") {
        let currentWinner = input[i];
        switch (currentWinner) {
            case "one":
                playerTwoEggs--; break;
            case "two":
                playerOneEggs--; break;
        }
        if (playerOneEggs === 0) {
            console.log(`Player one is out of eggs. Player two has ${playerTwoEggs} eggs left.`);
            return;
        } else if (playerTwoEggs === 0) {
            console.log(`Player two is out of eggs. Player one has ${playerOneEggs} eggs left.`);
            return;
        }
        i++;
    }
    console.log(`Player one has ${playerOneEggs} eggs left.`);
    console.log(`Player two has ${playerTwoEggs} eggs left.`);
}
easterEggsBattle(["5", "4", "one", "two", "one", "two", "two", "End of battle"])


//(["2","6","one","two","two"])
//(["6", "3", "one", "two", "two", "one", "one"])