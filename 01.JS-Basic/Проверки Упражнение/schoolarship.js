function scholarship(input) {

    let income = Number(input[0])
    let success = Number(input[1])
    let salary = Number(input[2])

    let socialSchoolarship = salary * 0.35
    let successSchoolarship = success * 25

    if (income < salary && success >= 4.5 && success < 5.5) {
        console.log(`You get a Social scholarship ${Math.floor(socialSchoolarship)} BGN`)
    }
    else if (income >= salary && success >= 5.5) {
        console.log(`You get a scholarship for excellent results ${Math.floor(successSchoolarship)} BGN`)
    }
    else if (income < salary && success >= 4.5) {
        if (success >= 5.5) {
            if (socialSchoolarship > successSchoolarship) {
                console.log(`You get a Social scholarship ${Math.floor(socialSchoolarship)} BGN`)
            } else { console.log(`You get a scholarship for excellent results ${Math.floor(successSchoolarship)} BGN`) }

        }
    }
    else { console.log("You cannot get a scholarship!") }
}
scholarship(["420.00",
    "4.5",
    "450.00"])

