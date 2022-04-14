function tikTakToe(input) {
    let dashboard =
        [[false, false, false],
        [false, false, false],
        [false, false, false]];
        
    let player = 'X';
    let play = true;
    for (let i = 0; i < input.length && play; i++) {
        let [moves, row] = input[i].split(' ').map(Number);
        if (dashboard[moves][row] == false) {
            dashboard[moves][row] = player;
        } else {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        if (dashboard[0][0] == 'X' && dashboard[1][1] == 'X' && dashboard[2][2] == 'X' ||
            dashboard[0][2] == 'X' && dashboard[1][1] == 'X' && dashboard[2][0] == 'X') {
            console.log(`Player X wins!`);
            play = false;
            break;
        } else if (dashboard[0][0] == 'O' && dashboard[1][1] == 'O' && dashboard[2][2] == 'O' ||
            dashboard[0][2] == 'O' && dashboard[1][1] == 'O' && dashboard[2][0] == 'O') {
            console.log(`Player O wins!`);
            play = false;
            break;
        }
        for (let j = 0; j < 3; j++) {
            let playerX = 0;
            let playerO = 0;
            for (let q = 0; q < 3; q++) {
                let current = dashboard[q];
                if (current[j] == 'X') {
                    playerX++;
                } else if (current[j] == 'O') {
                    playerO++;
                }
            } if (playerX == 3) {
                console.log(`Player X wins!`);
                play = false;
                break;
            } else if (playerO == 3) {
                console.log(`Player O wins!`);
                play = false;
                break;
            }
        }
        let filledRows = 0;
        for (let row of dashboard) {
            if (row.every((element) => element == 'X')) {
                console.log("Player X wins!");
                play = false;
                break;
            } else if (row.every((element) => element == 'O')) {
                console.log("Player O wins!");
                play = false;
                break;
            } else if (row.every((element) => element != false)) {
                filledRows++;
            }
        } if (filledRows == 3) {
            console.log("The game ended! Nobody wins :(");
            break;
        }
        if (player == 'X') {
            player = 'O';
        } else {
            player = 'X';
        }
    }
    for (let currentRow of dashboard) {
        console.log(currentRow.join('\t'));
    }
}
// tikTakToe(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"]);
// console.log('-----------');
// tikTakToe(["0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"]);
// console.log('-----------');
tikTakToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);