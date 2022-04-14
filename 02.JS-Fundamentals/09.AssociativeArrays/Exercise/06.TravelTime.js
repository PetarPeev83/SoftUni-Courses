function travelTime(input) {
    let countryList = {};
    for (let current of input) {
        let currentArr = current.split(" > ");
        let country = currentArr.shift();
        let town = currentArr.shift();
        let cost = Number(currentArr.shift());
        if (countryList.hasOwnProperty(country)) {
            if (countryList[country].hasOwnProperty(town)) {
                countryList[country][town] = Math.min(cost, countryList[country][town]);
            } else {
                countryList[country][town] = cost;
            }
        } else {
            countryList[country] = new Object();
            countryList[country][town] = cost;
        }
    }
    let sortedCountries = Object.entries(countryList).sort((a, b) => a[0].localeCompare(b[0]));
    for (let i = 0; i < sortedCountries.length; i++) {
        let toPrint = [];
        toPrint.push(`${sortedCountries[i][0]} ->`);
        let sortedCost = Object.entries(sortedCountries[i][1]).sort((a, b) => a[1] - b[1]);
        for (let current of sortedCost) {
            toPrint.push(`${current[0]} -> ${current[1]}`)
        };
        console.log(toPrint.join(" "));
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);