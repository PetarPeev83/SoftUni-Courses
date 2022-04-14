function numberPyramid(input) {

    let n = Number(input[0])
    let counter = 1
    let bigger = false
    let printNumber = ""

    for (let i = 1; i <= n; i++) {

        for (let x = 1; x <= i; x++) {

            if (counter > n) {
                bigger = true
                break;
            }
            printNumber += counter + " "
            counter++
        }
        console.log(printNumber)
        printNumber = ""
        if (bigger) {
            break;
        }
    }
}
numberPyramid(["15"])