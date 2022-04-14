function ticketsManager(ticketsDescription, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = String(destination);
            this.price = Number(price);
            this.status = String(status);
        };
    };

    let ticketsUnsorted = [];
    for (let current of ticketsDescription) {
        [ticketDestination, ticketPrice, ticketStatus] = current.split('|');
        let currentTicket = new Ticket(ticketDestination, ticketPrice, ticketStatus);
        ticketsUnsorted.push(currentTicket);
    };

    let sortedTickets = [];
    if (sortingCriteria == 'price') {
        sortedTickets = ticketsUnsorted.sort((a, b) => a.price - b.price);
    } else {
        sortedTickets = ticketsUnsorted.sort((a, b) => a[sortingCriteria].localeCompare(b[sortingCriteria]));
    };
    // console.log(sortedTickets);
    return sortedTickets;
}
ticketsManager(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');