function mobileOperator(input) {

    let contractYears = input[0];
    let contractType = input[1];
    let extraMB = input[2];
    let mounthsToPay = Number(input[3]);
    let mounthTax = 0;

    if (contractYears === "one") {
        switch (contractType) {
            case "Small": mounthTax = 9.98; break;
            case "Middle": mounthTax = 18.99; break;
            case "Large": mounthTax = 25.98; break;
            case "ExtraLarge": mounthTax = 35.99; break;
        }
    } else if (contractYears === "two") {
        switch (contractType) {
            case "Small": mounthTax = 8.58; break;
            case "Middle": mounthTax = 17.09; break;
            case "Large": mounthTax = 23.59; break;
            case "ExtraLarge": mounthTax = 31.79; break;
        }
    }
    if (extraMB === "yes") {
        if (mounthTax <= 10) {
            mounthTax += 5.5;
        } else if (mounthTax <= 30) {
            mounthTax += 4.35;
        } else {
            mounthTax += 3.85;
        }
    }
    if (contractYears === "two") {
        mounthTax *= 0.9625;
    }
    console.log(`${(mounthTax * mounthsToPay).toFixed(2)} lv.`);
}
mobileOperator(["two","Small","yes","20"]);


//(["two","ExtraLarge","yes","20"]);
//(["one","Small","yes","10"]);
//(["two", "Large", "no", "10"]);