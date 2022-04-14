function firm(input) {

    let neededHours = Number(input[0])
    let days = Number(input[1])
    let employees = Number(input[2])

    let workingDays = days * 0.9
    let workingHours = Math.floor(workingDays * 8) + employees * days * 2

    if (workingHours >= neededHours) {
        console.log(`Yes!${workingHours - neededHours} hours left.`)
    } else { console.log(`Not enough time!${neededHours - workingHours} hours needed.`) }

}
firm(["50", "5", "2"])