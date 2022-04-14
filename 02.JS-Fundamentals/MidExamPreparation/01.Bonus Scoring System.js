function bonus(input) {
    let students = Number(input.shift());
    let lectures = Number(input.shift());
    let additionalBonus = Number(input.shift());
    let inputNums = input.map(Number);
    let maxBonusPoints = 0;
    let maxStudentAttendances = 0;
    for (let num of inputNums) {
        let currentNum = Math.round(num / lectures * (5 + additionalBonus));
        if (currentNum > maxBonusPoints) {
            maxBonusPoints = currentNum;
            maxStudentAttendances = num;
        }
    }
    console.log(`Max Bonus: ${maxBonusPoints}.`);
    console.log(`The student has attended ${maxStudentAttendances} lectures.`);
}
// bonus([
//     '5', '25', '30',
//     '12', '19', '24',
//     '16', '20'
// ]
// );
bonus([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]
);
