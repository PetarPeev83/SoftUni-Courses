function nationalCourt(input) {
    let peopleCount = Number(input[3]);
    let totalPeoplePerHour = Number(input[0]) + Number(input[1]) + Number(input[2]);
    let hoursCounter = 0;
    while (peopleCount > 0) {
        peopleCount -= totalPeoplePerHour;
        hoursCounter++;
        if (hoursCounter % 4 === 0) {
            hoursCounter++;
        }
    }
    console.log(`Time needed: ${hoursCounter}h.`);
}
// nationalCourt([5, 6, 4, 20]);
// nationalCourt([1, 2, 3, 45]);
nationalCourt([3, 2, 5, 40]);