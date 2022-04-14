function cookingByNumber(...params) {

    let num = Number(params[0]);
    for (let i = 1; i <= 5; i++) {
        let command = params[i];
        if (command == 'chop') {
            num /= 2;
        } else if (command == 'dice') {
            num = Math.sqrt(num);
        } else if (command == 'spice') {
            num++;
        } else if (command == 'bake') {
            num *= 3;
        } else if (command == 'fillet') {
            num *= 0.8;
        }
        console.log(num);
    }
}
// cookingByNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');