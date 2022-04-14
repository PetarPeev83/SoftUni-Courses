function suitcasesLoad(input) {

    let capacity = Number(input[0]);
    let SuitcasesVolume = 0;
    let counter = 0;
    let i = 1;

    while (input[i] !== "End" && SuitcasesVolume <= capacity) {

        let currentSuitcase = Number(input[i]);

        if (i % 3 === 0) {
            currentSuitcase *= 1.1;
        }
        SuitcasesVolume += currentSuitcase;

        if (SuitcasesVolume > capacity) {
            console.log("No more space!")
            break;
        }

        counter++;
        i++;
    }
    if (capacity >= SuitcasesVolume) {
        console.log("Congratulations! All suitcases are loaded!");
    }
    console.log(`Statistic: ${counter} suitcases loaded.`);
}
suitcasesLoad(["700.5",
    "180",
    "340.6",
    "126",
    "220"])