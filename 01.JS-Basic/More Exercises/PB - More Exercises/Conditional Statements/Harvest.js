function harvest(input) {

    let X = Number(input[0])  // •	1ви ред: X кв.м е лозето 
    let Y = Number(input[1])  // •	2ри ред: Y грозде за един кв.м 
    let Z = Number(input[2])  // •	3ти ред: Z нужни литри вино 
    let workers = Number(input[3]) // •	4ти ред: брой работници 

    let grapeProduction = X * Y

    let wineLitre = (grapeProduction * 0.40) / 2.5

    if (wineLitre < Z) {
        console.log(`It will be a tough winter! More ${Math.floor(Z - wineLitre)} liters wine needed.`)
    }
    else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineLitre)} liters.`)
        console.log(`${Math.ceil(wineLitre - Z)} liters left -> ${Math.ceil((wineLitre - Z) / workers)} liters per person.`)
    }

}
harvest(["1020", "1.5", "425", "4"])