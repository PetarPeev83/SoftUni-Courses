function divisionWithoutRemainder(input) {

    let numbersNum = Number(input.shift());
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 0; i < numbersNum; i++) {

        let currentNum = Number(input.shift());

        if (currentNum % 2 === 0) {
            p1++;
        } 
        if (currentNum % 3 === 0) {
            p2++;
        }
         if (currentNum % 4 === 0) {
            p3++;
        }
    }
    console.log(`${(p1 / numbersNum * 100).toFixed(2)}%`);
    console.log(`${(p2 / numbersNum * 100).toFixed(2)}%`);
    console.log(`${(p3 / numbersNum * 100).toFixed(2)}%`);
}
divisionWithoutRemainder//(["3", "3", "6", "9"]);
(["10","680","2","600","200","800","799","199","46","128","65"]);