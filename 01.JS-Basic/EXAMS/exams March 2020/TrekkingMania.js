function trekkingMania(input) {

    let groupsNum = Number(input[0])

    let musala = 0
    let monblan = 0
    let kilimanjaro = 0
    let k2 = 0
    let everest = 0
    let allPeople = 0

    for (let i = 1; i <= groupsNum; i++) {

        let currentGroup = Number(input[i])
        allPeople += currentGroup

        if (currentGroup <= 5) {
            musala += currentGroup
        } else if (currentGroup > 5 && currentGroup <= 12) {
            monblan += currentGroup
        } else if (currentGroup > 12 && currentGroup <= 25) {
            kilimanjaro += currentGroup
        } else if (currentGroup > 25 && currentGroup <= 40) {
            k2 += currentGroup
        } else if (currentGroup > 40) {
            everest += currentGroup
        }
    }
    console.log(`${((musala / allPeople) * 100).toFixed(2)}%`)
    console.log(`${((monblan / allPeople) * 100).toFixed(2)}%`)
    console.log(`${((kilimanjaro / allPeople) * 100).toFixed(2)}%`)
    console.log(`${((k2 / allPeople) * 100).toFixed(2)}%`)
    console.log(`${((everest / allPeople) * 100).toFixed(2)}%`)
}
trekkingMania(['10',
    '10',
    '5',
    '1',
    '100',
    '12',
    '26',
    '17',
    '37',
    '40',
    '78'
])