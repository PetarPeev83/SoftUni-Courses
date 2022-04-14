function city(cityInfo) {

    let arrOfKeys = Object.keys(cityInfo);
    for (let currentKey of arrOfKeys) {
        console.log(`${currentKey} -> ${cityInfo[currentKey]}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});