function plantDiscovery(input) {
    let plantsCount = Number(input.shift());
    let plantsList = {};
    let i = 0;
    for (i; i < plantsCount; i++) {
        let current = input[i].split("<->");
        plantsList[current[0]] = {
            rarity: Number(current[1]),
            rating: [],
        }
    }
    while (input[i] !== "Exhibition") {
        let [operation, tokens] = input[i].split(": ");
        let [plant, num] = tokens.split(" - ");
        if (operation === "Rate" && plantsList[plant] !== undefined) {
            plantsList[plant]["rating"].push(Number(num));
        } else if (operation === "Update" && plantsList[plant] !== undefined) {
            plantsList[plant]["rarity"] = Number(num);
        } else if (operation === "Reset" && plantsList[plant] !== undefined) {
            plantsList[plant]["rating"] = [];
        } else {
            console.log("error");
        }
        i++;
    }
    console.log('Plants for the exhibition:');
    let sortedByRating = Object.entries(plantsList).sort((a, b) => ratingCalc(b[1]["rating"]) - ratingCalc(a[1]["rating"]));
    let sortedByRare = sortedByRating.sort((a, b) => b[1]['rarity'] - a[1]['rarity']);
    sortedByRare.forEach(element => console.log(`- ${element[0]}; Rarity: ${element[1]['rarity']}; Rating: ${(ratingCalc(element[1]['rating']).toFixed(2))}`))
    function ratingCalc(ratingsArr) {
        if (ratingsArr.length === 0) {
            return 0;
        } else {
            let result = ratingsArr.reduce((a, b) => a + b) / ratingsArr.length;
            return result;
        }
    }
}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
// plantDiscovery(["2",
//     "Candelabra<->10",
//     "Oahu<->10",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition"]);