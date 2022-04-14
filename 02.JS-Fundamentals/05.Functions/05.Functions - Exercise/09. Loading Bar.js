function loadingBar(percent) {

    let num = percent /10;
    let scope = `[${"%".repeat(num)}${".".repeat(10 - num)}]`

    if (percent < 100){
        console.log(`${percent}% ${scope}`);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
        console.log(scope);
    }
}
// loadingBar(30);
loadingBar(50);
// loadingBar(100);