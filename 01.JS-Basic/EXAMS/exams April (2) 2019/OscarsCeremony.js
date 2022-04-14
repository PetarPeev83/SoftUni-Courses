function oscarsCeremony(input) {

    let hallRent = Number(input[0])
    let figure = hallRent * 0.70
    let catering = figure * 0.85
    let sound = catering / 2

    let total = hallRent + figure + catering + sound

    console.log(total.toFixed(2))
}
oscarsCeremony(["3500"])