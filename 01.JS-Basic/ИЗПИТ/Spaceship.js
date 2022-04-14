function spaceship(input) {

    let shipW = Number(input[0])
    let shipL = Number(input[1])
    let shipH = Number(input[2])
    let averageAustronautHeight = Number(input[3])

    let spaceshipSpace = shipH * shipL * shipW
    let roomSize = (averageAustronautHeight + 0.4) * 2 * 2

    let rooms = Math.floor(spaceshipSpace / roomSize)

    if (rooms < 3) {
        console.log("The spacecraft is too small.")
    } else if (rooms >= 3 && rooms <= 10) {
        console.log(`The spacecraft holds ${rooms} astronauts.`);
    } else {
        console.log("The spacecraft is too big.");
    }
}
spaceship(["3.5", "4", "5", "1.70"])