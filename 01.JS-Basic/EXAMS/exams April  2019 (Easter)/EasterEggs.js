function easterEggs(input) {

    let paintedEggs = Number(input[0]);
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let maxColor = "";
    let maxEggs = 0;

    for (let i = 1; i <= paintedEggs; i++) {
        let currentEggColor = input[i];

        switch (currentEggColor) {
            case "red":
                red++;
                if (red > Math.max(orange, blue, green)) {
                    maxColor = currentEggColor;
                    maxEggs = red;
                } break;
            case "orange":
                orange++;
                if (orange > Math.max(red, blue, green)) {
                    maxColor = currentEggColor;
                    maxEggs = orange;
                } break;
            case "blue":
                blue++;
                if (blue > Math.max(orange, red, green)) {
                    maxColor = currentEggColor;
                    maxEggs = blue;
                } break;
            case "green":
                green++;
                if (green > Math.max(orange, blue, red)) {
                    maxColor = currentEggColor;
                    maxEggs = green;
                } break;
        }
    }
    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxEggs} -> ${maxColor}`);
}
easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);

//(["4", "blue", "red", "blue", "orange"]);