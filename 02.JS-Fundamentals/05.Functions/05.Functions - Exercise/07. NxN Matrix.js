function nXn(n) {

    let num = String(n)

    for (let i = 0; i < n; i++) {
        console.log((num + " ").repeat(n));
    }
}
nXn(3);
// NxN(7);
// NxN(2);