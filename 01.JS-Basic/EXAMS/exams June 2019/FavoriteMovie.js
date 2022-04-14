function favoriteMovie(input) {
    let index = 0;
    let limit = 7;
    let bestFilm = "";
    let bestPoints = 0;
    while (input[index] !== "STOP") {
        let movie = input[index];
        let sum = 0;
        if (limit <= 0) {
            console.log("The limit is reached.");
            break;
        }
        for (let i = 0; i < movie.length; i++) {
            let currentLetter = movie.charAt(i);
            sum += movie.charCodeAt(i);
            if (currentLetter === " " || (currentLetter === currentLetter.toLowerCase() && currentLetter === currentLetter.toUpperCase())) {
                continue;
            } else if (currentLetter === currentLetter.toLowerCase()) {
                sum -= movie.length * 2;
            } else if (currentLetter === currentLetter.toUpperCase()) {
                sum -= movie.length;
            }
        }
        if (sum > bestPoints) {
            bestPoints = sum;
            bestFilm = movie;
        }
        limit--;
        index++;
    }
    console.log(`The best movie for you is ${bestFilm} with ${bestPoints} ASCII sum.`);
}
favoriteMovie//(["Matrix", "Breaking bad", "Legend", "STOP"]);
    // (["Wrong turn","The maze","Area 51","Night Club","Ice age","Harry Potter","Wizards"]);
    (["2 The maze", "School story 2", "Shrek 2", "Ice age", "STOP"])
