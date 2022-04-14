function cinemaTickets(input) {

    let movieName = input[0]
    let freeTickets = Number(input[1])
    let currentFilmTickets = 0
    let totalTickets = 0
    let studentTickets = 0
    let standartTickets = 0
    let kidTickets = 0
    let i = 2

    while (movieName !== "Finish") {

        while (currentFilmTickets < freeTickets) {

            let current = input[i]

            if (current === "End") {
                console.log(`${movieName} - ${((currentFilmTickets / freeTickets * 100)).toFixed(2)}% full.`)
                i++
                movieName = String(input[i])
                i++
                freeTickets = Number(input[i])
                totalTickets += currentFilmTickets
                currentFilmTickets = 0
            }
            else if (current === "student") {
                studentTickets++
                currentFilmTickets++
            } else if (current === "standard") {
                standartTickets++
                currentFilmTickets++
            } else if (current === "kid") {
                kidTickets++
                currentFilmTickets++
            }
            if (currentFilmTickets >= freeTickets) {
                console.log(`${movieName} - ${((currentFilmTickets / freeTickets * 100)).toFixed(2)}% full.`)
                i++
                movieName = String(input[i])
                i++
                freeTickets = Number(input[i])
                totalTickets += currentFilmTickets
                currentFilmTickets = 0
            }
            i++
        }
        i++
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standartTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student","Finish"])