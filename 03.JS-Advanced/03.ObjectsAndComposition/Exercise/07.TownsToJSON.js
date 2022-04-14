function TownsToJSON(input) {

    let townList = [];

    for (let i = 1; i < input.length; i++) {
        let obj = {
            Town: '',
            Latitude: 0,
            Longitude: 0,
        }
        let splitted = input[i].slice(2, -2).split(' | ');
        obj.Town = splitted[0];
        obj.Latitude = Number(Number(splitted[1]).toFixed(2));
        obj.Longitude = Number(Number(splitted[2]).toFixed(2));
        townList.push(obj);
    }
    console.log(JSON.stringify(townList));
}
TownsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
TownsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);