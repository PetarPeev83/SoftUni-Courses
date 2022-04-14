function worldTour(input) {
    let stops = input.shift();
    let current = input.shift();
    while (current !== 'Travel') {
        let [command, option1, option2] = current.split(":");
        if (command === "Add Stop") {
            let index = Number(option1);
            let newStop = option2;
            if (index < stops.length && index >= 0) {
                let stops1 = stops.slice(0, index);
                let stops2 = stops.slice(index);
                stops = stops1 + newStop + stops2;
            }
            console.log(stops);
        } else if (command === "Remove Stop") {
            let startIndex = Number(option1);
            let endIndex = Number(option2);
            if (startIndex < stops.length && endIndex < stops.length && startIndex >= 0 && endIndex >= 0) {
                let stops1 = stops.slice(0, startIndex);
                let stops2 = stops.slice(endIndex + 1);
                stops = stops1 + stops2;
            }
            console.log(stops);
        } else if (command === "Switch") {
            let oldStop = option1;
            let newStop = option2;
            if (stops.includes(oldStop)) {
                let pattern = new RegExp(oldStop, 'g');
                stops = stops.replace(pattern, newStop);
            }
            console.log(stops);
        }
        current = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);
