function movieTickets(input) {

    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let n = Number(input[2]);

    for (let i = a1; i <= a2 - 1; i++) {
        for (let q = 1; q <= n-1; q++) {
            for (let p = 1; p <= n / 2 - 1; p++) {
                
                if (i % 2 !== 0 && (i + q + p) % 2 !== 0){
                    console.log(`${String.fromCharCode(i)}-${q}${p}${i}`);
                }
            }
        }
    }
}
movieTickets(["86", "88", "4"]);

//(["71","74","6"]);
//(["69","72","4 "]);
