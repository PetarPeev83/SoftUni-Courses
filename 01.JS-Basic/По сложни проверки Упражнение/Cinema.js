function cinema(input) {

    let type = input[0]
    let r = Number(input[1])
    let c = Number(input[2])

    let capacity = r * c

    if (type === "Premiere") {
        console.log((capacity * 12).toFixed(2))
    }
    else if (type === "Normal") {
        console.log((capacity * 7.5).toFixed(2))
    }
    else if (type === "Discount") {
        console.log((capacity * 5).toFixed(2))
    }
}
cinema(["Premiere", "10", "12"])
