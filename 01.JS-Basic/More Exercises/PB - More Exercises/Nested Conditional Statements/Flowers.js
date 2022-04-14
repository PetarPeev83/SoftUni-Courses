function flowers(input) {

    let chrysanthemums = Number(input[0])
    let roses = Number(input[1])
    let tulips = Number(input[2])
    let season = input[3]
    let holiday = input[4]

    let total = 0.0

    switch (season) {
        case "Spring":
            if (holiday === "Y") {
                if (tulips > 7) {
                    total = ((chrysanthemums * 2 + roses * 4.1 + tulips * 2.5) * 1.15) * 0.95
                }
                else {
                    total = (chrysanthemums * 2 + roses * 4.1 + tulips * 2.5) * 1.15
                }
            }
            else {
                if (tulips > 7) {
                    total = (chrysanthemums * 2 + roses * 4.1 + tulips * 2.5) * 0.95
                }
                else { total = chrysanthemums * 2 + roses * 4.1 + tulips * 2.5 }
            }; break;

        case "Summer":
            switch (holiday) {
                case "Y":
                    total = (chrysanthemums * 2 + roses * 4.1 + tulips * 2.5) * 1.15; break;
                case "N":
                    total = chrysanthemums * 2 + roses * 4.1 + tulips * 2.5
            }; break;
        case "Autumn":
            switch (holiday) {
                case "Y":
                    total = (chrysanthemums * 3.75 + roses * 4.5 + tulips * 4.15) * 1.15; break;
                case "N":
                    total = chrysanthemums * 3.75 + roses * 4.5 + tulips * 4.15
            }; break;
        case "Winter":
            switch (holiday) {
                case "Y":
                    if (roses >= 10) {
                        total = ((chrysanthemums * 3.75 + roses * 4.5 + tulips * 4.15) * 1.15) * 0.9
                    }
                    else { total = (chrysanthemums * 3.75 + roses * 4.5 + tulips * 4.15) * 1.15 }; break;
                case "N":
                    if (roses >= 10) {
                        total = (chrysanthemums * 3.75 + roses * 4.5 + tulips * 4.15) * 0.9
                    }
                    else { total = chrysanthemums * 3.75 + roses * 4.5 + tulips * 4.15 }; break;
            }

    }
    if (chrysanthemums + roses + tulips > 20) {
        total = total * 0.8
    }

    console.log((total + 2).toFixed(2))

}
flowers(["3", "10", "9", "Winter", "N"])