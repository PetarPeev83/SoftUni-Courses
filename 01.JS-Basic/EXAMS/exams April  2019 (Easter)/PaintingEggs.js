function paintingEggs(input) {

    let eggsSize = input[0];
    let eggsColor = input[1];
    let packs = Number(input[2]);
    let pricePerPack = 0;

    switch (eggsSize) {
        case "Large":
            switch (eggsColor) {
                case "Red": pricePerPack = 16; break;
                case "Green": pricePerPack = 12; break;
                case "Yellow": pricePerPack = 9; break;
            } break;
        case "Medium":
            switch (eggsColor) {
                case "Red": pricePerPack = 13; break;
                case "Green": pricePerPack = 9; break;
                case "Yellow": pricePerPack = 7; break;
            } break;
        case "Small":
            switch (eggsColor) {
                case "Red": pricePerPack = 9; break;
                case "Green": pricePerPack = 8; break;
                case "Yellow": pricePerPack = 5; break;
            } break;
    }
    console.log(`${(packs * pricePerPack * 0.65).toFixed(2)} leva.`);
}
paintingEggs(["Medium", "Green", "5"])
//(["Small", "Yellow", "3"])