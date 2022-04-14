function problem3(input) {
    let animalsList = {};
    let areaList = {};
    while (input[0] !== 'EndDay') {
        let [command, tokens] = input.shift().split(": ");
        tokens = tokens.split("-");
        if (command === "Add") {
            if (animalsList.hasOwnProperty(tokens[0])) {
                animalsList[tokens[0]].food += Number(tokens[1]);
            } else {
                animalsList[tokens[0]] = {
                    food: Number(tokens[1]),
                    area: tokens[2],
                }
                if (!areaList.hasOwnProperty(tokens[2])) {
                    areaList[tokens[2]] = [tokens[0]];
                } else {
                    areaList[tokens[2]].push(tokens[0])
                }
            }
        } else if (command === "Feed") {
            if (animalsList.hasOwnProperty(tokens[0])) {
                animalsList[tokens[0]]['food'] -= Number(tokens[1]);
                if (animalsList[tokens[0]]['food'] <= 0) {
                    console.log(`${tokens[0]} was successfully fed`);
                    delete animalsList[tokens[0]];
                    for (let current of Object.entries(areaList)) {
                        if (current[1].includes(tokens[0])) {
                            let index = current[1].indexOf(tokens[0]);
                            areaList[current[0]].splice(index, 1);
                        }
                    }
                }
            }
        }
    }
    let sortedAnimals = Object.entries(animalsList).sort((a,b) => a[0].localeCompare(b[0])).sort((a, b) => b[1]["food"] - a[1]["food"]);
    let sortedAreas = Object.entries(areaList).filter(x => x[1].length > 0).sort((a,b) => a[0].localeCompare(b[0])).sort((a, b) => b[1].length - a[1].length);
    console.log('Animals:');
    sortedAnimals.forEach(element => console.log(` ${element[0]} -> ${element[1]["food"]}g`));
    console.log("Areas with hungry animals:");
    sortedAreas.forEach(element => console.log(` ${element[0]}: ${element[1].length}`));
}
// problem3(["Add: Adam-4500-ByTheCreek",
//     "Add: Maya-7600-WaterfallArea",
//     "Add: Maya-1230-WaterfallArea",
//     "Feed: Jamie-2000",
//     "EndDay"]);
problem3(["Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"]);
// problem3(["Add: Bonie-3490-RiverArea",
//     "Add: Sam-5430-DeepWoodsArea",
//     "Add: Bonie-200-RiverArea",
//     "Add: Maya-4560-ByTheCreek",
//     "Feed: Maya-2390",
//     "Feed: Bonie-3500",
//     "Feed: Johny-3400",
//     "Feed: Sam-5500",
//     "EndDay"]);
