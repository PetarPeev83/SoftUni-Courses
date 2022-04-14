function pipesInPool(input) {

    let v = Number(input[0])    // V – Обем на басейна в литри 
    let P1 = Number(input[1])    // P1 – дебит на първата тръба за час 
    let P2 = Number(input[2])   // P2 – дебит на втората тръба за час
    let H = Number(input[3])    // H – часовете които работникът отсъства 

    let P1fill = P1 * H
    let P2fill = P2 * H
    let poolFill = (P1 + P2) * H

    if (poolFill > v) {

        console.log(`For ${H} hours the pool overflows with ${(poolFill - v)} liters.`)
    }
    else { console.log(`The pool is ${(poolFill / v * 100).toFixed(2)}% full. Pipe 1: ${(P1fill / poolFill * 100).toFixed(2)}%. Pipe 2: ${(P2fill / poolFill * 100).toFixed(2)}%.`) }

}
pipesInPool(["1000", "100", "120", "3"])