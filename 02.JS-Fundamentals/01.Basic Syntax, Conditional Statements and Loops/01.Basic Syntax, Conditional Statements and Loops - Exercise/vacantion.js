function vacantion(peopleNum, typeOdGroup, dayOfWeek) {

    let price = 0;

    switch (typeOdGroup) {
        case "Students":
            switch (dayOfWeek) {
                case "Friday":
                    price = peopleNum * 8.45;
                    break;
                case "Saturday":
                    price = peopleNum * 9.80;
                    break;
                case "Sunday":
                    price = peopleNum * 10.46;
                    break;
            } if (peopleNum >= 30) {
                price *= 0.85;
            }
            break;
        case "Business":
            if (peopleNum >= 100) {
                peopleNum -= 10;
            }
            switch (dayOfWeek) {
                case "Friday":
                    price = peopleNum * 10.90;
                    break;
                case "Saturday":
                    price = peopleNum * 15.60;
                    break;
                case "Sunday":
                    price = peopleNum * 16;
                    break;
            }
            break;
        case "Regular":
            switch (dayOfWeek) {
                case "Friday":
                    price = peopleNum * 15;
                    break;
                case "Saturday":
                    price = peopleNum * 20;
                    break;
                case "Sunday":
                    price = peopleNum * 22.50;
                    break;
            } if (peopleNum >= 10 && peopleNum <= 20) {
                price *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacantion(30, "Students", "Sunday");
vacantion(40, "Regular", "Saturday");