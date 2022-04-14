function bookShelf(input) {
    let bookShelfsList = {};
    for (let current of input) {
        if (current.includes(" -> ")) {
            let [id, ganre] = current.split(" -> ");
            if (!bookShelfsList.hasOwnProperty(id)) {
                bookShelfsList[id] = {
                    ganre,
                    books: [],
                }
            }
        } else {
            let [title, nextToSplit] = current.split(": ");
            let [author, ganre] = nextToSplit.split(", ");
            for (let value of Object.values(bookShelfsList)) {
                if (value['ganre'] === ganre) {
                    value['books'].push(`--> ${title}: ${author}`);
                }
            }
        }
    }
    let sorted = Object.entries(bookShelfsList).sort((a, b) => b[1]['books'].length - a[1]['books'].length);
    for (let toPrint of sorted) {
        console.log(`${toPrint[0]} ${toPrint[1]['ganre']}: ${toPrint[1]["books"].length}`);
        toPrint[1]["books"].sort((a, b) => a.localeCompare(b)).forEach(element => console.log(element));
    }
    // console.log(bookShelfsList);
}
bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery',
    '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history', '2 -> romance',
    'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']);