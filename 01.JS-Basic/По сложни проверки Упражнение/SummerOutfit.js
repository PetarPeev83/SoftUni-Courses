function summerOutfit(input) {

    let temprature = Number(input[0])
    let timeOfTheDay = input[1]

    let Outfit = ""
    let Shoes = ""

    if (temprature >= 10 && temprature <= 18) {
        switch (timeOfTheDay) {
            case "Morning": Outfit = "Sweatshirt"
                Shoes = "Sneakers"; break;

            case "Afternoon": Outfit = "Shirt"
                Shoes = "Moccasins"; break;

            case "Evening": Outfit = "Shirt"
                Shoes = "Moccasins"; break;
        }
    }
    else if (temprature > 18 && temprature <= 24) {
        switch (timeOfTheDay) {
            case "Morning": Outfit = "Shirt"
                Shoes = "Moccasins"; break;

            case "Afternoon": Outfit = "T-Shirt"
                Shoes = "Sandals"; break;

            case "Evening": Outfit = "Shirt"
                Shoes = "Moccasins"; break;
        }
    }
    else if (temprature >= 25) {
        switch (timeOfTheDay) {
            case "Morning": Outfit = "T-Shirt"
                Shoes = "Sandals"; break;

            case "Afternoon": Outfit = "Swim Suit"
                Shoes = "Barefoot"; break;

            case "Evening": Outfit = "Shirt"
                Shoes = "Moccasins"; break;
        }
    }

    console.log(`It's ${temprature} degrees, get your ${Outfit} and ${Shoes}.`)

}
summerOutfit(["16",
    "Morning"])


