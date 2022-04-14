function argumentInfo(...input) {
    let result = {};
    for (let current of input) {
        let type = typeof current;
        if (Object.keys(result).includes(type)) {
            result[type]++;
        } else {
            result[type] = 1;
        }
        console.log(`${type}: ${current}`);
    }
    let sorted = Object.entries(result).sort((a,b) => b[1] - a[1]);
    // console.log(sorted);
    sorted.forEach(x => console.log(`${x[0]} = ${x[1]}`));
}
// argumentInfo('cat', 'dog', 42, function () { console.log('Hello world!'); });  
argumentInfo({ name: 'bob' }, 3.333, 9.999);