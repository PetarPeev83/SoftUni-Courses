function minerTask(input) {
    let list = {};
    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        if (list.hasOwnProperty(resource)) {
            list[resource] += quantity;
        } else {
            list[resource] = quantity;
        }
    }
    Object.keys(list).forEach(element => { console.log(`${element} -> ${list[element]}`); });
}
// minerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);