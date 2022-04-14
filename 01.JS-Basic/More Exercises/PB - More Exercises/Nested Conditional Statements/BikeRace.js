function bikeRace(input) {

    let juniors = Number(input[0])
    let seniors = Number(input[1])
    let typeRoute = input[2]

    switch (typeRoute) {
        case "trail":
            console.log(((juniors * 5.5 + seniors * 7) * 0.95).toFixed(2)); break;

        case "cross-country":
            if (juniors + seniors >= 50) {
                console.log((((juniors * 8 + seniors * 9.5) * 0.75) * 0.95).toFixed(2))
            }
            else { console.log(((juniors * 8 + seniors * 9.5) * 0.95).toFixed(2))}; break; 

        case "downhill":
            console.log(((juniors * 12.25 + seniors * 13.75) * 0.95).toFixed(2)); break;
        case "road":
            console.log(((juniors * 20 + seniors * 21.5) * 0.95).toFixed(2)); break;
    }


}
bikeRace(["20", "25", "cross-country"])