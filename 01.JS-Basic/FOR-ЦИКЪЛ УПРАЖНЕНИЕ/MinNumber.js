function minNumber(input) {

    let n = Number(input[0])

    let smallest = Number.MAX_SAFE_INTEGER

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i])

        if (num < smallest) {
            smallest = num
        }
    }

    console.log(smallest)
}
minNumber(["4", "45", "-20", "7", "99"])
