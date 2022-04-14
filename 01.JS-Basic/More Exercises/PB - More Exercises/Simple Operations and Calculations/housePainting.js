function housePainting(input) {

    let litreGreenPaint = 3.4
    let litreRedPaint = 4.3

    let x = Number(input[0])
    let y = Number(input[1])
    let h = Number(input[2])

    let door = 1.2 * 2
    let window = 1.5 * 1.5

    let frontWall = x * x - door
    let backWall = x * x
    let sideWalls = (x * y) * 2 - (window * 2)

    let floorSize = frontWall + backWall + sideWalls
    let green = floorSize / litreGreenPaint

    let roofSize = (x * y) * 2 + (x * h / 2) * 2
    let red = roofSize / litreRedPaint

    console.log(green.toFixed(2))
    console.log(red.toFixed(2))
}
housePainting(['6', '10', '5.2'])









