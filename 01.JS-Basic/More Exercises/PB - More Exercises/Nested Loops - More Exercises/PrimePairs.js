function primePairs(input) {

    let firstNum = Number(input[0])
    let secondNum = Number(input[1])
    let firstMaxNum = firstNum + Number(input[2])
    let secondMaxNum = secondNum + Number(input[3])

    for (let o = firstNum; o <= firstMaxNum; o++) {

        let first = true
        let firstPrime = 0

        for (let i = 2; i <= Math.sqrt(o); i++) {
            if (o % i === 0) {

                first = false;
                break;
            }
        } if (first) {

            firstPrime = o

        } else { continue; }

        for (let p = secondNum; p <= secondMaxNum; p++) {

            let second = true
            let secondPrime = 0

            for (let m = 2; m <= Math.sqrt(p); m++) {
                if (p % m === 0) {

                    second = false;
                    break;
                }
            }
            if (second) {

                secondPrime = p

            } else { continue; }

            console.log('' + firstPrime + secondPrime)
        }
    }
}
primePairs(["10", '20', '5', '5'])