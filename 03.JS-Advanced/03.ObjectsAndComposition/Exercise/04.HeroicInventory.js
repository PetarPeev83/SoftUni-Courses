function heroicInvertory(input) {

    let result = [];

    for (let hero of input) {
        [name, level, items] = hero.split(" / ");
        // let obj = {};
        // obj.name = name;
        // obj.level = Number(level);
        // obj.items = items;
        level = Number(level);
        items = items ? items.split(', ') : [];
        result.push({ name, level, items })
    }
    console.log(JSON.stringify(result));
}
heroicInvertory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
heroicInvertory(['Jake / 1000 / Gauss, HolidayGrenade']);