function evenOrOdd(input) {

    let number = Number(input[0]) % 2
    if (number === 0) {
        console.log("even")
    } else {
        console.log("odd")
    }

}
evenOrOdd(["1024"])