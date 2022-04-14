function destinationMapper(input) {
    let pattern = /(=|\/)([A-Z][A-za-z]{2,})\1/g;
    let match = input.match(pattern);
    let travelPoints = 0;
    let destination = [];
    if (match !== null) {
        for (let current of match) {
            current = current.slice(1, -1);
            destination.push(current);
            travelPoints += current.length;
        }
    }
    console.log(`Destinations: ${destination.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}
// destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
destinationMapper('ThisIs some InvalidInput');