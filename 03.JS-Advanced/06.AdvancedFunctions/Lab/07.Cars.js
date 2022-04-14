function cars(input) {
    let result = {};
    let inherited = [];

    function creator() {
        return {
            create: (name) => result[name] = {},
            // inherit: (name, parentName) =>  result[name] = result[parentName],           // result[parentName].apply(result[name])
            set: (name, key, value) => result[name][key] = value,
            print: print(),
        }
    }
    let operation = creator();
    for (let current of input) {
        [command, ...rest] = current.split(' ');
        if (rest[1] == 'inherit') {
            operation.create(rest[0]);
            // operation.inherit(rest[0], rest[2]);
            inherited.push([rest[0], rest[2]])
        } else {
            operation[command](...rest);
        }
    }
    function print(name) {
        // if (inherited.length > 0) {
        //     for (let current of inherited) {
        //         result[current[1]] = Object.assign(result[current[0]], result[current[1]]);
        //     }
        // }
        return Object.entries(result[name])
            .forEach(x => console.log(`${x[0]}:${x[1]}`))
    }

    console.log(inherited);
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'create c3 inherit c1',
    'print c1',
    'print c2']);