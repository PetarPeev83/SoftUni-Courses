function primeNumberChecker(number) {

    let isPrime = true;

    if (number <= 1) {
        isPrime = fasle;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    console.log(isPrime);
}
primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);