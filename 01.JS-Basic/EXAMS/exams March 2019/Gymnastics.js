function gymnastics(input) {

    let country = input[0];
    let sportDevice = input[1];
    let result = 0;

    switch (country) {
        case "Russia":
            switch (sportDevice) {
                case "ribbon": result = 9.1 + 9.4; break;
                case "hoop": result = 9.3 + 9.8; break;
                case "rope": result = 9.6 + 9; break;
            } break;
        case "Bulgaria":
            switch (sportDevice) {
                case "ribbon": result = 9.6 + 9.4; break;
                case "hoop": result = 9.55 + 9.75; break;
                case "rope": result = 9.5 + 9.4; break;
            } break;
        case "Italy":
            switch (sportDevice) {
                case "ribbon": result = 9.2 + 9.5; break;
                case "hoop": result = 9.45 + 9.35; break;
                case "rope": result = 9.7 + 9.15; break;
            } break;
    }
    console.log(`The team of ${country} get ${result.toFixed(3)} on ${sportDevice}.`);
    console.log(`${((20 - result) / 20 * 100).toFixed(2)}%`);
}
gymnastics(["Bulgaria", "ribbon"]);

//(["Russia","rope"]);
//(["Italy","hoop"]);