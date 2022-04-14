function dayOfWeek(day) {

    let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (weekDays.includes(day)) {
        console.log(weekDays.indexOf(day) + 1);
    } else {
        console.log('error');
    }
}
dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');