function moving(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let index = 3;

    let freeSpace = a * b * c;
    let boxes = 0;

    while (freeSpace > boxes) {
        if (input[index] === "Done") {
            console.log(`${freeSpace - boxes} Cubic meters left.`)
            break;
        }
        boxes += Number(input[index]);
        index++;
    }
    if (boxes > freeSpace) {
        console.log(`No more free space! You need ${boxes - freeSpace} Cubic meters more.`)
    }
}
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])
