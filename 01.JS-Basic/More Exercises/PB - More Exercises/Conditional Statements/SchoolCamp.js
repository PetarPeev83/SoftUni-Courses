function schoolCamp(input) {

    let season = input[0]
    let gender = input[1]
    let studentsNum = Number(input[2])
    let nightsNum = Number(input[3])
    let sport = ''
    let price = 0

    switch (season) {
        case "Winter":
            switch (gender) {
                case "girls":
                    price = 9.6 * studentsNum
                    sport = "Gymnastics"; break;
                case "boys":
                    price = 9.6 * studentsNum
                    sport = "Judo"; break;
                case "mixed":
                    price = 10 * studentsNum
                    sport = "Ski"; break;
            }; break;
        case "Spring":
            switch (gender) {
                case "girls": 
                    price = 7.2 * studentsNum
                    sport = "Athletics"; break;
                case "boys":
                    price = 7.2 * studentsNum
                    sport = "Tennis"; break;
                case "mixed":
                    price = 9.5 * studentsNum
                    sport = "Cycling"; break;
            }; break;
        case "Summer":
            switch (gender) {
                case "boys":
                    price = 15 * studentsNum
                    sport = "Football"; break;
                case "girls":
                    price = 15 * studentsNum
                    sport = "Volleyball"; break;
                case "mixed":
                    price = 20 * studentsNum
                    sport = "Swimming"; break;
            }; break;
    }
    if (studentsNum >= 50) {
        price *= 0.5
    } else if (studentsNum >= 20 && studentsNum < 50) {
        price *= 0.85
    } else if (studentsNum >= 10 && studentsNum < 20) {
        price *= 0.95
    }

    console.log(`${sport} ${(price * nightsNum).toFixed(2)} lv.`)
}
schoolCamp(['Spring', 'girls', '20', '7'])