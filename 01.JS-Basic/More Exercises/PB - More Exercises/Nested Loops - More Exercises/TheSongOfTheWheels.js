function theSong(input) {

    let M = Number(input[0])
    let allPasswords = ''
    let password = ''
    let passwordCounter = 0

    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            for (let c = 1; c < 10; c++) {
                for (let d = 1; d < 10; d++) {
                    if (a * b + c * d === M && a < b && c > d) {
                        allPasswords += " " + a + b + c + d
                        passwordCounter++
                        if (passwordCounter === 4) {
                            password = "" + a + b + c + d
                        }
                    }
                }
            }
        }
    }
    if (passwordCounter === 0) {
        console.log('No!')
    } else {
        console.log(allPasswords);
        
        if (passwordCounter < 4) {
            console.log('No!')
        } else {
            console.log(`Password: ${password}`);
        }
    }
}
theSong([110])