function easterCompetition(input) {

    let sweetBreadNum = Number(input[0]);
    let index = 1;
    let bestChef = "";
    let maxPoints = 0;

    for (let i = 0; i < sweetBreadNum; i++) {
        
        let chefName = input[index];
        let currentChefPoints = 0;
        index++;

        while (input[index] !== "Stop") {

            let points = Number(input[index]);
            currentChefPoints += points;

            index++;
        }
        index++;
        console.log(`${chefName} has ${currentChefPoints} points.`);
        
        if (currentChefPoints > maxPoints) {
            bestChef = chefName;
            maxPoints = currentChefPoints; 
            console.log(`${chefName} is the new number 1!`);
        }
    }
    console.log(`${bestChef} won competition with ${maxPoints} points!`);
}
easterCompetition(["2", "Chef Angelov", "9", "9", "9", "Stop", "Chef Rowe", "10", "10", "10", "10", "Stop"])