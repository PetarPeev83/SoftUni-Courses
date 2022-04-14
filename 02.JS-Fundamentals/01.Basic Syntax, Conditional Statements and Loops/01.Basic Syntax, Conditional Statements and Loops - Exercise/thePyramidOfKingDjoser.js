function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let height = 0;

    for (let i = base; i > 0; i -= 2) {
        height++;
        if (i <= 2) {
            gold = i * i;
        } else {
            stone += (i - 2) * (i - 2);
            if (height % 5 === 0) {
                lapisLazuli += (i * 4 - 4);
            } else {
                marble += (i * 4 - 4);
            }
        }
    }
    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}
thePyramidOfKingDjoser(11, 1);
console.log("-------");
thePyramidOfKingDjoser(11, 0.75);
console.log("--------");
thePyramidOfKingDjoser(12, 1);
console.log("---------");
thePyramidOfKingDjoser(23, 0.5);