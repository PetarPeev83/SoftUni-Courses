function heartDelivery(input) {
    let neighborhood = input.shift().split('@').map(Number);
    let houseIndex = 0;
    let index = 0;
    while (input[index] !== 'Love!') {
        let jumpNum = Number(input[index].split(" ").slice(1));
        houseIndex += jumpNum;
        if (houseIndex >= neighborhood.length) {
            houseIndex = 0;
        }
        if (neighborhood[houseIndex] === 0) {
            console.log(`Place ${houseIndex} already had Valentine's day.`);
        } else {
            neighborhood[houseIndex] -= 2;
            if (neighborhood[houseIndex] === 0) {
                console.log(`Place ${houseIndex} has Valentine's day.`);
            }
        }
        index++;
    }
    console.log(`Cupid's last position was ${houseIndex}.`);
    neighborhood = neighborhood.filter(x => x > 0);
    if (neighborhood.length === 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${neighborhood.length} places.`);
    }
}
heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);
// heartDelivery(['2@4@2', 'Jump 2', 'Jump 2', 'Jump 8', 'Jump 3', 'Jump 1', 'Love!']);