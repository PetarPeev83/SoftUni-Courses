function volleyball(input) {

    let yearType = input[0]
    let p = Number(input[1])
    let h = Number(input[2])

    let totalGames = ((48 - h) * 3 / 4) + (p * 2 / 3) + h

    if (yearType === "leap"){
        console.log(Math.floor(totalGames * 1.15))
    }
else {console.log(Math.floor(totalGames))}

}
volleyball(["leap","2","3"])
