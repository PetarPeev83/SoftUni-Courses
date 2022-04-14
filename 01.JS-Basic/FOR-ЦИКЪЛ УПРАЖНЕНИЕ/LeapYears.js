function leapYears(input) {

    let leapYear = Number(input[0])
    let lastYear = Number(input[1])

    for (firstYear = leapYear; firstYear <= lastYear; firstYear += 4) {
        console.log(firstYear)
    }
}
leapYears(["1908",
    "1919"])