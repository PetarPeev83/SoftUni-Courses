function everest(input) {

    let currentScore = 5364
    let days = 1
    let i = 0

    while (currentScore < 8848) {

        let currentCheck = input[i]

        if (currentCheck === "No") {
            i++
            currentScore += Number(input[i])
        } else if (currentCheck === 'Yes') {
            days++
            if (days > 5) {
                break;
            } else {
                i++
                currentScore += Number(input[i])
            }
        } else if (currentCheck === 'END') {
            break;
        }
        i++
    }
    if (currentScore < 8848) {
        console.log("Failed!");
        console.log(currentScore);
    } else {
        console.log(`Goal reached for ${days} days!`);
    }
}
everest(['Yes',
    '535',
    'Yes',
    '849',
    'Yes',
    '499',
    'Yes',
    '400',
    'Yes',
    '500'])