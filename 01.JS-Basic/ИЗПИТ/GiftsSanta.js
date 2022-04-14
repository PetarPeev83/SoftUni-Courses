function giftsSanta(input) {

    let N = Number(input[0])
    let M = Number(input[1])
    let S = Number(input[2])
    let rightNum = ''

    for (let i = M; i >= N; i--) {
        if (i % 2 === 0 && i % 3 === 0) {
            if (i === S) {  
              break ; 
            }
            rightNum += `${i} `
        }
    }
    console.log(rightNum)
}
giftsSanta(["20",
"1000",
"36"])

//(["1","30","15"])
//(["1", "36", "12"])