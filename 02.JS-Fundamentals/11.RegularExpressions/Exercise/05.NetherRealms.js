function realms(input) {
    let patternHealth = /[^\d\+\-\*\/\.]/g;
    let patternDamage = /(?:[\+\-])?\d+(?:\.\d+)?/g;
    let operationPattern = /[\\*\\/]+/g;
    let deamons = input.split(/(?:\,[ ]*)+/g);
    let deamonsList = [];
    for (let deamon of deamons) {
        if (deamon.includes(" ")){
            continue;
        }
            let damage = 0;
            let health = deamon.match(patternHealth);
            if (health !== null) {
                health = health.map(x => x.charCodeAt(0)).reduce((a, b) => a + b);
            } else {
                health = 0;
            }
            let damageMatch = deamon.match(patternDamage);
            if (damageMatch !== null) {
                damage = damageMatch.reduce((a, b) => Number(a) + Number(b));
                let operation = deamon.match(operationPattern);
                if (operation !== null) {
                    operation = operation.join('');
                    for (let i = 0; i < operation.length; i++) {
                        if (operation[i] === "*") {
                            damage *= 2;
                        } else {
                            damage /= 2;
                        }
                    }
                }
            }
            deamon = {
                name: deamon,
                health: health,
                damage: damage,
            }
            deamonsList.push(deamon);
    }
    let sorted = deamonsList.sort((a, b) => a['name'].localeCompare(b['name']));
    sorted.forEach(element => console.log(`${element.name} - ${element.health} health, ${element.damage.toFixed(2)} damage`));
}
realms('vfh,hh ,  M3ph-0.5s-0.5t0.0**');
// console.log('----------');
// realms('M3ph1st0**       ,      Azazel');
// console.log('----------');
// realms('Gos/ho');
