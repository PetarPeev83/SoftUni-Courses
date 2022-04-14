function traveling(input) {

    let destination = String(input[0])
    let minBudget = Number(input[1])
    let index = 2

    while (destination !== "End") {

        let currentBudget = 0

        while (currentBudget < minBudget) {

            let currentCheck = Number(input[index])
            currentBudget += currentCheck
            index++
        }
        console.log(`Going to ${destination}!`)
        destination = input[index]
        index++
        minBudget = Number(input[index])
        index++
    }
}
traveling(["Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End"])

