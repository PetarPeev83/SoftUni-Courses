function piccolo(input) {
    let carsInParking = {};
    for (let element of input) {
        let [inOut, carNumber] = element.split(", ");
        if (inOut === "IN") {
            carsInParking[carNumber] = "in";
        } else {
            delete carsInParking[carNumber];
        }
    }
    if (Object.keys(carsInParking).length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        let sorted = Object.keys(carsInParking).sort((a, b) => a.localeCompare(b));
        console.log(sorted.join("\n"));
    }
}
piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 
'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 
'IN, CA9876HH', 'IN, CA2822UU']);
// piccolo(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'OUT, CA1234TA']);