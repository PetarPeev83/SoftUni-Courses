function listProcessor(input) {
    let result = [];
    let commands = {
        add: (string) => result.push(string),
        remove: (string) => result = result.filter(x => x != string),
        print: () => console.log(result.join(',')),
    }
    for (let current of input) {
        [opp, str] = current.split(' ');
        commands[opp](str);
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);