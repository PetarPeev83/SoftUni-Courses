function towns(input) {
    for (let currentTownInfo of input) {
        let currentTownInfoSplited = currentTownInfo.split(" | ");
        let townObj = {};
        townObj.town = currentTownInfoSplited[0];
        townObj.latitude = Number(currentTownInfoSplited[1]).toFixed(2);
        townObj.longitude = Number(currentTownInfoSplited[2]).toFixed(2);
        console.log(townObj);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);