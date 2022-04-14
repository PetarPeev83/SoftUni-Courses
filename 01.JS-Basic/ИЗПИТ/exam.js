function exam(input) {

    let studentsNum = Number(input[0])
    let poor = 0
    let average = 0
    let good = 0
    let excellent = 0
    let sumOfRatings = 0

    for (let i = 1; i <= studentsNum; i++) {

        let currentCheck = Number(input[i])

        if (currentCheck >= 2 && currentCheck <= 2.99) {
            poor++
            sumOfRatings += currentCheck
        } else if (currentCheck >= 3 && currentCheck <= 3.99) {
            average++
            sumOfRatings += currentCheck
        } else if (currentCheck >= 4 && currentCheck <= 4.99) {
            good++
            sumOfRatings += currentCheck
        } else {
            excellent++
            sumOfRatings += currentCheck
        }
    }
    console.log(`Top students: ${((excellent / studentsNum) * 100).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${((good / studentsNum) * 100).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${((average / studentsNum) * 100).toFixed(2)}%`)
    console.log(`Fail: ${((poor / studentsNum) * 100).toFixed(2)}%`)
    console.log(`Average: ${(sumOfRatings / studentsNum).toFixed(2)}`)
}
exam(['6', '2', '3', '4', '5', '6', '2.2'])