function fitnes(input) {

    let people = Number(input[0])
    let back = 0
    let chest = 0
    let legs = 0
    let abs = 0
    let proteinSake = 0
    let proteinBar = 0
    let workOut = 0
    let protein = 0

    for (let i = 1; i <= people; i++) {
        let currentCheck = input[i]
        switch (currentCheck) {
            case "Back":
                back++
                workOut++; break;
            case "Chest":
                chest++
                workOut++; break;
            case "Legs":
                legs++
                workOut++; break;
            case "Abs":
                abs++
                workOut++; break;
            case "Protein shake":
                proteinSake++
                protein++; break;
            case "Protein bar":
                proteinBar++
                protein++; break;
        }
    }
    console.log(`${back} - back`)
    console.log(`${chest} - chest`)
    console.log(`${legs} - legs`)
    console.log(`${abs} - abs`)
    console.log(`${proteinSake} - protein shake`)
    console.log(`${proteinBar} - protein bar`)
    console.log(`${((workOut / people) * 100).toFixed(2)}% - work out`)
    console.log(`${((protein / people) * 100).toFixed(2)}% - protein`)
}
fitnes(["7","Chest","Back","Legs","Legs","Abs","Protein shake","Protein bar"])

//(["10", "Back", "Chest", "Legs", "Abs", "Protein shake", "Protein bar", "Protein shake", "Protein bar", "Legs", "Abs"])