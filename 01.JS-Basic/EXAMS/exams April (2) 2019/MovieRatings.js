function movieRatings(input) {

    let filmNum = Number(input[0]);
    let i = 1;
    let hightestRatingFilmName = "";
    let hightestRating = 0;
    let lowestRatingFilmName = "";
    let lowestRating = 10;
    let ratingSum = 0;
    let filmCounter = 0;

    while (filmNum > filmCounter) {
        let filmName = input[i];
        i++;
        let filmRating = Number(input[i]);
        ratingSum += filmRating;
        if (filmRating > hightestRating) {
            hightestRating = filmRating;
            hightestRatingFilmName = filmName;
        } if (filmRating < lowestRating) {
            lowestRating = filmRating;
            lowestRatingFilmName = filmName;
        }
        i++;
        filmCounter++;
    }
    console.log(`${hightestRatingFilmName} is with highest rating: ${hightestRating.toFixed(1)}`);
    console.log(`${lowestRatingFilmName} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${(ratingSum / filmNum).toFixed(1)}`);
}
movieRatings(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"])

//(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"])