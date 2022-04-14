function meetings(input) {

    let list = {};

    for (let person of input) {
        let [day, name] = person.split(" ");
        if (list.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            list[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let day in list) {
        console.log(`${day} -> ${list[day]}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);