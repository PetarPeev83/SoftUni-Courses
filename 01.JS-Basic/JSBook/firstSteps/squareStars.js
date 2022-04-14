function starsSqare(n) {

    console.log("*".repeat(n));
    for (let i = 0; i < n - 2; i++) {
        console.log("*" + " ".repeat(n - 2) + "*");
    }
    console.log("*".repeat(n));
}
starsSqare([5])