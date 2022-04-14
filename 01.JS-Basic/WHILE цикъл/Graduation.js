function graduation(input) {

    let studentName = input[0]
    let i = 1
    let gradeSum = 0
    let fail = 0
    let grade = 0

    while (i < input.length) {
        
        let currentRating = Number(input[i])
        gradeSum += currentRating

        if (currentRating < 4) {
            fail++
            if (fail > 1) {
                console.log(`${studentName} has been excluded at ${grade} grade`)
                break;
            }
        }
        
        grade++
        i++
    }
    if (fail <= 1) {
        console.log(`${studentName} graduated. Average grade: ${(gradeSum / 12).toFixed(2)}`)
    }
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
