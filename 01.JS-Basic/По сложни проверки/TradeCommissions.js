function tradeCommissions(input) {
    let town = input[0]
    let s = Number(input[1])

    if (s >= 0 && s <= 500) {

        switch (town) {
            case "Sofia": console.log((s * 0.05).toFixed(2)); break;
            case "Varna": console.log((s * 0.045).toFixed(2)); break;
            case "Plovdiv": console.log((s * 0.055).toFixed(2)); break;
            default: console.log("error");break;
        }

    }
    else if (s > 500 && s <= 1000) {

        switch (town) {
            case "Sofia": console.log((s * 0.07).toFixed(2)); break;
            case "Varna": console.log((s * 0.075).toFixed(2)); break;
            case "Plovdiv": console.log((s * 0.08).toFixed(2)); break;
            default: console.log("error");break;
        }
    }
    else if (s > 1000 && s <= 10000) {

        switch (town) {
            case "Sofia": console.log((s * 0.08).toFixed(2)); break;
            case "Varna": console.log((s * 0.1).toFixed(2)); break;
            case "Plovdiv": console.log((s * 0.12).toFixed(2)); break;
            default: console.log("error");break;
        }
    }
    else if (s > 10000) {

        switch (town) {
            case "Sofia": console.log((s * 0.12).toFixed(2)); break;
            case "Varna": console.log((s * 0.13).toFixed(2)); break;
            case "Plovdiv": console.log((s * 0.145).toFixed(2)); break;
            default: console.log("error");break;
        }
    }
    else { console.log("error") }
}
tradeCommissions(["Kaspichan",
"-50"])

