function partyTime(input) {
    let list = {
        vipList: [],
        regularList: [],
    };
    let invated = input.shift();
    while (invated !== "PARTY") {
        if (invated.charCodeAt(0) >= 48 && invated.charCodeAt(0) <= 57) {
            list["vipList"].push(invated);
        } else {
            list["regularList"].push(invated);
        }
        invated = input.shift();
    }
    for (let guest of input) {
        if (list['regularList'].includes(guest)) {
            list['regularList'].splice(list['regularList'].indexOf(guest), 1);
        } else if (list['vipList'].includes(guest)) {
            list['vipList'].splice(list['vipList'].indexOf(guest), 1);
        }
    }
    console.log(list.vipList.length + list.regularList.length);
    for (let value of Object.values(list.vipList)) {
        console.log(value);
    } for (let value of Object.values(list.regularList)) {
        console.log(value);
    }
}
// partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);

partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL',
    'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ',
    'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ']);