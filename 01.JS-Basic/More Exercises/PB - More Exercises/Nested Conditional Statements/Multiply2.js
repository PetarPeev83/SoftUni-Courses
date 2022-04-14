function multiply(input) {

    for (let i = 0; i <= input.length - 1; i++) {
        if (input[i] >= 0) {
            console.log(`Result: ${(input[i] * 2).toFixed(2)}`)
        }
        else { console.log("Negative number!") }
    }
}
multiply(['23.43',
    '12.3245',
    '0',
    '65.23432',
    '23',
    '65',
    '-12'
])