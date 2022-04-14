function magicDates(input) {

    let startYear = Number(input[0]);
    let endYear = Number(input[1]);
    let numToFind = Number(input[2]);

    let date = new Date(startYear, 0, 1);     // (година , месец , ден)
    let nothingFind = true;

    for (date.getFullYear(); date.getFullYear() <= endYear; date.setDate(date.getDate() + 1)) {    // За да увеличаваме с 1 ден при всяко завъртане, ще използваме метод от Date - setDate(…),  
                                                                                                   //чрез който ще добавяме по един ден към текущата дата, която пък ще вземем с getDate()

        let d1 = Math.floor(date.getDate() / 10); // взимаме първата цифра на деня
        let d2 = date.getDate() % 10; // взимаме втората цифра на деня

        let m1 = Math.floor((date.getMonth() + 1) / 10);//взимаме първата цифра на месеца (добавяме 1 защото месеците започват от 0)
        let m2 = (date.getMonth() + 1) % 10; // взимаме втората цифра на месеца (добавяме 1 защото месеците започват от 0)

        let y1 = Math.floor(date.getFullYear() / 1000); // взимаме първата цифра на годината
        let y2 = Math.floor(date.getFullYear() / 100) % 10; // взимаме втората цифра на годината
        let y3 = Math.floor(date.getFullYear() / 10) % 10; // взимаме третата цифра на годината
        let y4 = date.getFullYear() % 10; // взимаме четвъртата цифра на годината

        let d1Sum = d1 * d2 + d1 * m1 + d1 * m2 + d1 * y1 + d1 * y2 + d1 * y3 + d1 * y4;
        let d2Sum = d2 * m1 + d2 * m2 + d2 * y1 + d2 * y2 + d2 * y3 + d2 * y4;
        let m1Sum = m1 * m2 + m1 * y1 + m1 * y2 + m1 * y3 + m1 * y4;
        let m2Sum = m2 * y1 + m2 * y2 + m2 * y3 + m2 * y4;
        let y1Sum = y1 * y2 + y1 * y3 + y1 * y4;
        let y2Sum = y2 * y3 + y2 * y4;
        let y3Sum = y3 * y4;

        let sumOfDates = d1Sum + d2Sum + m1Sum + m2Sum + y1Sum + y2Sum + y3Sum;
        if (sumOfDates === numToFind) {
            nothingFind = false;
            console.log("" + d1 + d2 + "-" + m1 + m2 + "-" + y1 + y2 + y3 + y4);
        }
    }
    if (nothingFind) {
        console.log("No");
    }
}
magicDates(["2011", "2012", "14"]);
//(["2003", "2004", "1500"]);
//(["2012", "2014", "80"]);
//(["2007", "2007", "144"]);


// Използвайки операциите деление и взимане на остатък върху отделните компоненти на датата,
// чрез методите getDay(), getMonth() и getFullYear(), можем да извлечем всяка цифра. Трябва да внимаваме с getMonth(),
// защото по аналогия с конструктора, този метод връща число между 0 (януари) и 11 (декември) и при него е необходимо добавяне на +1,
// за да получим месецa в интервал [1-12]. Друго, за което трябва да внимаваме, е целочисленото деление на 10 (/ 10), 
//което няма да е целочислено тук и затова след всяко целочислено деление ще закръгляме изрично до най-малкото цяло число,
// чрез метода Math.floor(…):