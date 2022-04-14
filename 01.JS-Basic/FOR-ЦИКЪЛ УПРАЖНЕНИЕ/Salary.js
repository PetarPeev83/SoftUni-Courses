function salary(input) {

    let openTabs = Number(input[0])
    let salary = Number(input[1])
    let penalty = 0

    for (let i = 2; i <= input.length - 1; i++) {

        let tab = input[i]

        switch (tab) {
            case "Facebook": penalty += 150; break;
            case "Instagram": penalty += 100; break;
            case "Reddit": penalty += 50; break;
        }
    }

    if (salary - penalty <= 0) {
        console.log("You have lost your salary.")
    }
    else {
        console.log(salary - penalty)
    }
}

salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])
