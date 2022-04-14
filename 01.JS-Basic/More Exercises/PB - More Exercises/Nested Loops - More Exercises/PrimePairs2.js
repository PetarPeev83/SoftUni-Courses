function primePairs(input) {

    let firstNum = Number(input[0])
    let secondNum = Number(input[1])
    let firstMaxNum = firstNum + Number(input[2])
    let secondMaxNum = secondNum + Number(input[3])

    for (let o = firstNum; o <= firstMaxNum; o++) {

        let firstCounter = 0
        let firstPrime = 0

        for (let i = 2; i < o; i++) {
            if (o % i === 0) {

                firstCounter++
            }
        } if (firstCounter < 1) {

            firstPrime = o

        } else { continue; }

        for (let p = secondNum; p <= secondMaxNum; p++) {

            let secondCounter = 0
            let secondPrime = 0

            for (let m = 2; m < p; m++) {
                if (p % m === 0) {

                    secondCounter++
                }
            }
            if (secondCounter < 1) {

                secondPrime = p

            } else { continue; }

            console.log('' + firstPrime + secondPrime)
        }
    }
}
primePairs(["10", '20', '5', '5'])