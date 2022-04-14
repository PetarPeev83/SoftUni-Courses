function problem2(input) {
    let n = Number(input.shift());
    let passwordPattern = /P@\$[A-Za-z]{5,}\d{1,}P@\$/g;
    let userNamePattern = /U\$[A-Z][a-z]{2,}U\$/g;
    let successful = 0;
    for (let i = 0; i < n; i++) {
        let currentCheck = input[i];
        let matchName = currentCheck.match(userNamePattern);
        let matchPass = currentCheck.match(passwordPattern);
        if (matchName !== null && matchPass !== null) {
            let name = matchName[0].slice(2, -2);
            let password = matchPass[0].slice(3, -3);
            console.log('Registration was successful');
            console.log(`Username: ${name}, Password: ${password}`);
            successful++;
        } else {
            console.log("Invalid username or password");
        }
    }
    console.log(`Successful registrations: ${successful}`);
}
// problem2(["3",
//     "U$MichaelU$P@$asdqwe123P@$",
//     "U$NameU$P@$PasswordP@$",
//     "U$UserU$P@$ad2P@$"]);
problem2(["2",
    "U$TommyU$P@$asdqwe123P@$",
    "Sara 1232412"]);