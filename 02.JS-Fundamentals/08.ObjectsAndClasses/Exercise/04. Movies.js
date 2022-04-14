function movies(input) {
    for (let i = 0; i < input.length; i++) {
        let movieList = {};
        let currentSplited = input[i].split(" ");
        if (currentSplited[0] === "addMovie") {
            let movie = currentSplited.slice(1).join(" ");
            movieList.name = movie;
            for (let j = i; j < input.length; j++) {
                currentSplited = input[j].split(" ");
                                if (currentSplited.includes("directedBy")) {
                    movie = currentSplited.slice(0, currentSplited.indexOf('directedBy')).join(' ');
                    if (Object.values(movieList).includes(movie)) {
                        movieList.director = currentSplited.slice(currentSplited.indexOf('directedBy') + 1).join(' ');
                    }
                } else if (currentSplited.includes("onDate")) {
                    movie = currentSplited.slice(0, currentSplited.indexOf('onDate')).join(' ');
                    if (Object.values(movieList).includes(movie)) {
                        movieList.date = currentSplited.slice(currentSplited.indexOf('onDate') + 1).join('');
                    }
                }
            }
            if (Object.keys(movieList).length === 3) {
                console.log(JSON.stringify(movieList));
            }
        }
    }
}
movies(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);