function metricConverter(input) {

    let convertNum = Number(input[0])
    let inputToconvert = input[1]
    let toConvertIn = input[2]

    let inMeter = Number(0.0)
    let result = Number(0.0)

    if (inputToconvert === "mm") {
        inMeter = convertNum / 1000
    }
    else if (inputToconvert === "cm") {
        inMeter = convertNum / 100
    }
    else if (inputToconvert === "m") {
        inMeter = convertNum
    }
    if (toConvertIn === "mm") {
        result = inMeter * 1000
    }
    else if (toConvertIn === "cm") {
        result = inMeter * 100
    }
    else if (toConvertIn === "m") {
        result = inMeter
    }
    console.log(result.toFixed(3))
}
metricConverter(["150","m","cm"])