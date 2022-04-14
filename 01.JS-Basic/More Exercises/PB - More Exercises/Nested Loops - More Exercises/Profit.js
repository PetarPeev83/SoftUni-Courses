function profit(input) {

    let oneLevNum = Number(input[0])
    let twoLevNum = Number(input[1])
    let fiveLevNum = Number(input[2])
    let sum = Number(input[3])

    for (let oneLev = 0; oneLev <= oneLevNum; oneLev++) {
        for (let twoLev = 0; twoLev <= twoLevNum; twoLev++) {
            for (let fiveLev = 0; fiveLev <= fiveLevNum; fiveLev++) {
                if (oneLev * 1 + twoLev * 2 + fiveLev * 5 === sum) {
                    console.log(`${oneLev} * 1 lv. + ${twoLev} * 2 lv. + ${fiveLev} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}
profit(['5', '3', '1', '7'])