function inventory(heroes) {
    let heroInvertory = [];
    for (let current of heroes) {
        current = current.split(" / ");
        let name = current[0];
        let level = Number(current[1]);
        let items = current[2].split(", ");
        let hero = {
            name,
            level,
            items,
        };
        heroInvertory.push(hero)
    }
    let sortedInvertory = heroInvertory.sort((a, b) => a.level - b.level);
    for (let currentHero of sortedInvertory){
        console.log(`Hero: ${currentHero.name}`);
        console.log(`level => ${currentHero.level}`);
        console.log(`Items => ${currentHero.items.sort((a,b) => a.localeCompare(b)).join(", ")}`);
    }
}
inventory(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]);
