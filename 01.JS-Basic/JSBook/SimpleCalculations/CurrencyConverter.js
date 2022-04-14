function currencyConverter(input) {

    let sum = Number(input[0]);
    let currencyFrom = String(input[1]);
    let currencyTo = String(input[2]);

    let sumInLeva = 0;
    let convertedSum = 0;

    switch (currencyFrom) {
        case "BGN": sumInLeva = sum; break;
        case "USD": sumInLeva = sum * 1.79549; break;
        case "EUR": sumInLeva = sum * 1.95583; break;
        case "GBP": sumInLeva = sum * 2.53405; break;
    }
    switch (currencyTo) {
        case "BGN": convertedSum = sumInLeva; break;
        case "USD": convertedSum = sumInLeva / 1.79549; break;
        case "EUR": convertedSum = sumInLeva / 1.95583; break;
        case "GBP": convertedSum = sumInLeva / 2.53405; break;
    }
    console.log(convertedSum.toFixed(2));
}
currencyConverter(["100", "BGN", "EUR"])