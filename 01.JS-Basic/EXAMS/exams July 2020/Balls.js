function balls(input) {

    let ballsNum = Number(input[0])
    let red = 0
    let orange = 0
    let yellow = 0
    let white = 0
    let black = 0
    let other = 0
    let points = 0
    let i = 1

    while (ballsNum > 0) {

        let currentColor = String(input[i])

        switch (currentColor) {
            case ("red"):
                red++
                points += 5; break;
            case ("orange"):
                orange++
                points += 10; break;
            case ("yellow"):
                yellow++
                points += 15; break;
            case ("white"):
                white++
                points += 20; break;
            case ("black"):
                black++
                points = Math.floor(points / 2); break;
            default:
                other++; break;
        }
        ballsNum--
        i++
    }
    console.log(`Total points: ${points}`)
    console.log(`Points from red balls: ${red}`)
    console.log(`Points from orange balls: ${orange}`)
    console.log(`Points from yellow balls: ${yellow}`)
    console.log(`Points from white balls: ${white}`)
    console.log(`Other colors picked: ${other}`)
    console.log(`Divides from black balls: ${black}`)
}
balls(["3", "white", "black", "pink"])