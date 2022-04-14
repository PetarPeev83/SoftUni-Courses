function townPopulation(input) {
    let townObj = {};
    for (let check of input) {
        const current = check.split(' <-> ');
        let town = current[0];
        let population = Number(current[1]);
        if (townObj[town] == undefined){
        townObj[town] = population;
        }else {
            townObj[town] += population;
        }
    }
    for (let currentTown in townObj){
        console.log(`${currentTown} : ${townObj[currentTown]}`);
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Sofia <-> 1200000']);
// townPopulation(['Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000']);