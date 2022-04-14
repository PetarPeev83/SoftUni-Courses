function cinema(input) {

    let saloonCapacity = Number(input[0]);
    let visitors = 0;
    let profit = 0;
    let index = 1;
    let notFull = true;

    while (input[index] !== "Movie time!") {

        let currentVisitors = Number(input[index]);
        visitors += currentVisitors;

        if (visitors > saloonCapacity) {

            console.log("The cinema is full.");
            notFull = false;
            break;
        }
        profit += currentVisitors * 5;

        if (currentVisitors % 3 === 0) {
            profit -= 5;
        }
        index++;
    }
    if (notFull) {
        console.log(`There are ${saloonCapacity - visitors} seats left in the cinema.`);
    }
    console.log(`Cinema income - ${profit} lv.`);
}
cinema(["60", "10", "6", "3", "20", "15", "Movie time!"]);
   // (["50", "15", "10", "10", "15", "5"]);
    //(["100", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "Movie time!"]);