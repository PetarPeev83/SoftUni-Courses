function bestPlayer(input) {

    let bestPlayer = ''
    let goals = 0

    for (let i = 0; input[i] !== "END" && goals < 10; i += 2) {
        let goalCheck = Number(input[i + 1])
        if (goalCheck > goals) {
            bestPlayer = String(input[i])
            goals = Number(input[i + 1])
        }
    }
    console.log(`${bestPlayer} is the best player!`);

    if (goals >= 3) {
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`)
    } else { console.log(`He has scored ${goals} goals.`) }
}
bestPlayer(["Silva",
"5",
"Harry Kane",
"10"])