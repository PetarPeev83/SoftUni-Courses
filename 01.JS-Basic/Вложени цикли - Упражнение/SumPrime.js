function sumPrime(input) {

    let primeNumbers = 0
    let nonPrimeNumbers = 0

    for (let i = 0; input[i] !== "stop"; i++) {

        let currentNum = Number(input[i])
        let counter = 0

        if (currentNum < 0) {
            console.log("Number is negative.")
            continue;
        }
        if (currentNum < 2) {
            nonPrimeNumbers += currentNum
        }
        else {
            for (let x = 1; x <= currentNum; x++) {
                if (currentNum % x === 0) {
                    counter++
                }
            }
        }
        if (counter <= 2) {
            primeNumbers += currentNum
        } else {
            nonPrimeNumbers += currentNum
        }
    }
    console.log(`Sum of all prime numbers is: ${primeNumbers}`)
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumbers}`)
}
sumPrime(["0",
    "-9",
    "0",
    "stop"])


