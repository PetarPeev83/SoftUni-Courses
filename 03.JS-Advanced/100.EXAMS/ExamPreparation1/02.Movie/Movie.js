class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalSoldTicketsProfit = 0;
        this.totalNumberSoldTickets = 0
    }
    newScreening(date, hall, description) {
        if (this.screenings.some(s => s.date == date && s.hall == hall)) {       // .SOME() POLZVAME VMESTO FOR CIKALA PO DOLU
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        };
        // for (let current of this.screenings) {
        //     if (current.date == date && current.hall == hall) {
        //         throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        //     };
        // };
        this.screenings.push({
            date,
            hall,
            description,
        });
        return `New screening of ${this.movieName} is added.`;
    };
    endScreening(date, hall, soldTickets) {
        for (let current of this.screenings) {
            if (current.date == date && current.hall == hall) {
                let profit = soldTickets * this.ticketPrice;
                this.totalSoldTicketsProfit += profit;
                this.totalNumberSoldTickets += soldTickets;
                let index = this.screenings.indexOf(current);
                this.screenings.splice(index, 1);
                return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${profit}`;
            };
        };
        throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
    };
    toString() {
        let result = [`${this.movieName} full information:`, `Total profit: ${this.totalSoldTicketsProfit.toFixed(0)}$`,
        `Sold Tickets: ${this.totalNumberSoldTickets}`];
        if (this.screenings.length == 0) {
            result.push("No more screenings!");
        } else {
            result.push("Remaining film screenings:");
            let sorted = this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));
            for (let current of sorted) {
                result.push(`${current.hall} - ${current.date} - ${current.description}`)
            };
        };
        return result.join('\n')
    };
};

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
