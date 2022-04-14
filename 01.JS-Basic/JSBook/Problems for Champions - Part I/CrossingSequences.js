function crossingSequences(input) {

    let tribunachiFirstNum = Number(input[0]);
    let tribunachiSecondNum = Number(input[1]);
    let tribunachiThirdNum = Number(input[2]);
    let spiralFirstNum = Number(input[3]);
    let spiralStep = Number(input[4]);

    while (tribunachiFirstNum <= 1000000) {

        let spiralCounter = 0;

        for (let i = spiralFirstNum; i <= 1000000; i += spiralStep) {

            let spiralNum = i;
            spiralCounter++;

            if (tribunachiFirstNum === spiralNum) {
                console.log(tribunachiFirstNum);
                return;
            } else if (tribunachiSecondNum === spiralNum) {
                console.log(tribunachiSecondNum);
                return;
            } else if (tribunachiThirdNum === spiralNum) {
                console.log(tribunachiThirdNum);
                return;
            }
        }
        tribunachiFirstNum = tribunachiFirstNum + tribunachiSecondNum + tribunachiThirdNum;
        tribunachiSecondNum = tribunachiFirstNum + tribunachiSecondNum + tribunachiThirdNum;
        tribunachiThirdNum = tribunachiFirstNum + tribunachiSecondNum + tribunachiThirdNum;
    }
    console.log("No");
}
crossingSequences(["99", "99", "99", "2", "2"])
//(["1", "4", "7", "23", "3"])
//(["1","1","1","1","1"]);
//(["13","25","99","5","2"]);
//(["1", "2", "3", "5", "2"]);