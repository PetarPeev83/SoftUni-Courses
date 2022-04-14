function grades(input) {

    let studentNum = Number(input[0])
    let sumOfGrade = 0

    let a = 0
    let b = 0
    let c = 0
    let d = 0

    for (let i = 1; i <= studentNum; i++) {

        let grade = Number(input[i])
        sumOfGrade += grade

        if (grade >= 2 && grade <= 2.99) {
            a++
        }
        else if (grade >= 3 && grade <= 3.99) {
            b++
        }
        else if (grade >= 4 && grade <= 4.99) {
            c++
        }
        else if (grade >= 5) {
            d++
        }
    }
    console.log(`Top students: ${(d / studentNum * 100).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${(c / studentNum * 100).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${(b / studentNum * 100).toFixed(2)}%`)
    console.log(`Fail: ${(a / studentNum * 100).toFixed(2)}%`)
    console.log(`Average: ${(sumOfGrade / studentNum).toFixed(2)}`)
}
grades(['10', '3.00', '2.99', '5.68', '3.01', '4', '4','6.00','4.50','2.44','5'])