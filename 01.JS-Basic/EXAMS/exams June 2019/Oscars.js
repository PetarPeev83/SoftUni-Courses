function oscars(input) {

    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let judgeNum = Number(input[2]);
    let result = academyPoints;
    let index = 3;

    for (let i = 0; i < judgeNum; i++) {
        let judgeName = input[index];
        index++;
        let judjePoints = Number(input[index]);
        result += (judgeName.length * judjePoints / 2);
        if (result >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${result.toFixed(1)}!`);
            return;
        }
        index++;
    }
    console.log(`Sorry, ${actorName} you need ${(1250.5 - result).toFixed(1)} more!`);
}
oscars//(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"]);
