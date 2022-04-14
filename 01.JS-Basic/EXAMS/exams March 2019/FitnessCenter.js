function fitnessCenter(input) {

    let fitnessCustumers = Number(input[0]);
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let custumersToTrain = 0;
    let custumersForProtein = 0;

    for (let i = 1; i <= fitnessCustumers; i++) {
        let activity = input[i];
        switch (activity) {
            case "Back": back++; custumersToTrain++; break;
            case "Chest": chest++; custumersToTrain++; break;
            case "Legs": legs++; custumersToTrain++; break;
            case "Abs": abs++; custumersToTrain++; break;
            case "Protein shake": proteinShake++; custumersForProtein++; break;
            case "Protein bar": proteinBar++; custumersForProtein++; break;
        }
    }
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${(custumersToTrain / fitnessCustumers * 100).toFixed(2)}% - work out`);
    console.log(`${(custumersForProtein / fitnessCustumers * 100).toFixed(2)}% - protein`);
}
fitnessCenter//(["10", "Back", "Chest", "Legs", "Abs", "Protein shake", "Protein bar", "Protein shake", "Protein bar", "Legs", "Abs"]);

(["7","Chest","Back","Legs","Legs","Abs","Protein shake","Protein bar"]);