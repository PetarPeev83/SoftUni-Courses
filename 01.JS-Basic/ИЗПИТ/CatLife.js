function catLife(input) {

    let cat = String(input[0])
    let sex = String(input[1])

    let humanYears = 0

    switch (cat) {
        case "British Shorthair":
            if (sex === "m") {
                humanYears = 13
            } else { humanYears = 14 }; break;
        case "Siamese":
            if (sex === "m") {
                humanYears = 15
            } else { humanYears = 16 }; break;
        case "Persian":
            if (sex === "m") {
                humanYears = 14
            } else { humanYears = 15 }; break;
        case "Ragdoll":
            if (sex === "m") {
                humanYears = 16
            } else { humanYears = 17 }; break;
        case "American Shorthair":
            if (sex === "m") {
                humanYears = 12
            } else { humanYears = 13 }; break;
        case "Siberian":
            if (sex === "m") {
                humanYears = 11
            } else { humanYears = 12 }; break;
        default: console.log(`${cat} is invalid cat!`); return;
    }

    let catMounths = (humanYears * 12) / 6

    console.log(`${catMounths} cat months`)
}
catLife(["Persian", "m"])