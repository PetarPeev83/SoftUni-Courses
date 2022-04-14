function passwordsGenerator(input) {

    let a = Number(input[0])
    let b = Number(input[1])
    let maxNumberPasswords = Number(input[2])
    let passwords = ''
    let A = 35
    let B = 64

    while (A <= 55) {
        while (B <= 96) {
            for (let x = 1; x <= a; x++) {
                for (let y = 1; y <= b; y++) {
                    passwords += `${String.fromCharCode(A)}${String.fromCharCode(B)}${x}${y}${String.fromCharCode(B)}${String.fromCharCode(A)}|`

                    if (x === a && y === b) {
                        console.log(passwords)
                        return;
                    } else if (maxNumberPasswords <= 1) {
                        console.log(passwords)
                        return;
                    }
                    maxNumberPasswords--
                    A++
                    B++
                    if (A > 55) {
                        A = 35
                    }
                    if (B > 96) {
                        B = 64
                    }
                }
            }
        }
    }
}
passwordsGenerator(['20', '50', '10'])