function pianist(input) {
    let n = Number(input.shift());
    let piecesList = {};
    let index = 0;
    for (index; index < n; index++) {
        let current = input[index].split("|");
        piecesList[current[0]] = {
            composer: current[1],
            key: current[2],
        }
    }
    while (input[index] !== "Stop") {
        let command = input[index].split("|");
        if (command[0] === "Add") {
            if (Object.keys(piecesList).includes(command[1])) {
                console.log(`${command[1]} is already in the collection!`);
            } else {
                piecesList[command[1]] = {
                    composer: command[2],
                    key: command[3],
                }
                console.log(`${command[1]} by ${command[2]} in ${command[3]} added to the collection!`);
            }
        } else if (command[0] === "Remove") {
            if (Object.keys(piecesList).includes(command[1])) {
                delete piecesList[command[1]];
                console.log(`Successfully removed ${command[1]}!`);
            } else {
                console.log(`Invalid operation! ${command[1]} does not exist in the collection.`);
            }
        } else if (command[0] === "ChangeKey") {
            if (Object.keys(piecesList).includes(command[1])) {
                console.log(`Changed the key of ${command[1]} to ${command[2]}!`);
                piecesList[command[1]]['key'] = command[2];
            } else {
                console.log(`Invalid operation! ${command[1]} does not exist in the collection.`);
            }
        }
        index++;
    }
    let sortedBycomposer = Object.entries(piecesList).sort((a, b) => a[1]["composer"].localeCompare(b[1]["composer"]));
    let sortedByName = sortedBycomposer.sort((a, b) => a[0].localeCompare(b[0]));
    sortedByName.forEach(element => console.log(`${element[0]} -> Composer: ${element[1]['composer']}, Key: ${element[1]['key']}`));
}
pianist(['3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop']);
// pianist(['4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop']);
