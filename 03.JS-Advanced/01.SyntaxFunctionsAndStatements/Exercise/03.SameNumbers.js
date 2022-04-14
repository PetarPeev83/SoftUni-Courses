function sameNumbers(number) {
    let same = true;
    let sum = 0;
    let splitted = String(number).split('');
    let first = splitted[0];
    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i] != first){
            same = false;
        }
        sum += Number(splitted[i]);
    }
    console.log(same);
    console.log(sum);
}
// sameNumbers(2222222);
sameNumbers(1234);