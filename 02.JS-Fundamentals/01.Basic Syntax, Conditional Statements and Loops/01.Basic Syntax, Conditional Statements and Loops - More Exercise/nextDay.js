function nextDay(year, month, day) {

    let date = new Date(year, month - 1, day);            //(изваждаме 1 защото месеците започват от 0 в JS ,
    date.setDate(date.getDate() + 1);                     // ПРИМЕРНО трети месец не е март а е април !!!)

    let newYear = date.getFullYear();
    let newMonth = date.getMonth() + 1;//(добавяме 1 защото месеците започват от 0)
    let newDate = date.getDate();

    console.log(`${newYear}-${newMonth}-${newDate}`);
}
nextDay(2016, 9, 30);