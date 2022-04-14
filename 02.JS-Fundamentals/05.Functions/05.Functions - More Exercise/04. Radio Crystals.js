function radioCrystals(array) {

    let targetThickness = Number(array[0]);

    for (let i = 1; i < array.length; i++) {
        let elementThickness = Number(array[i]);
        let cut = 0;
        let lap = 0;
        let grind = 0;
        let etch = 0;
        let xRay = 0;

        console.log(`Processing chunk ${elementThickness} microns`);

        if (elementThickness >= targetThickness * 4) {
            while (elementThickness >= targetThickness * 4) {
                elementThickness /= 4;
                cut++;
            }
            console.log(`Cut x${cut}`);
            elementThickness =  Math.floor(elementThickness);
            transport();
        }
        if (elementThickness >= targetThickness * 1.2) {
            while (elementThickness >= targetThickness * 1.2) {
                elementThickness *= 0.8;
                lap++;
            }
            console.log(`Lap x${lap}`);
            elementThickness = Math.floor(elementThickness);
            transport();
        }
        if (elementThickness >= targetThickness + 20) {
            while (elementThickness >= targetThickness + 20) {
                elementThickness -= 20;
                grind++;
            }
            elementThickness = Math.floor(elementThickness);
            console.log(`Grind x${grind}`);
            transport();
        }
        if (elementThickness > targetThickness) {
            while (elementThickness > targetThickness) {
                elementThickness -= 2;
                etch++;
            }
            elementThickness =  Math.floor(elementThickness);
            console.log(`Etch x${etch}`);
            transport();
        }
        if (elementThickness === targetThickness - 1) {
            elementThickness++;
            console.log(`X-ray x1`);
        }
        console.log(`Finished crystal ${elementThickness} microns`);
    }
    function transport() {
        return console.log("Transporting and washing");
    }
}
// radioCrystals([1375, 50000]);
radioCrystals([1000, 4000 , 8100]);