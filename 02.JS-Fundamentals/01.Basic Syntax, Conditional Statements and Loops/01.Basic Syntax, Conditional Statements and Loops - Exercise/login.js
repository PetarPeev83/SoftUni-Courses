function login(input) {

    let userName = input.shift();
    let counter = 1;

    while (true) {
        let currentCheck = input.shift();
        let password = ((currentCheck.split("")).reverse()).join("");
        if (userName === password) {
            console.log(`User ${userName} logged in.`);
            break;
        } else {
            console.log("Incorrect password. Try again.");
        }
        counter++;
        if (counter === 4) {
            console.log(`User ${userName} blocked!`);
            break;
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
console.log("---------------");
login(['momo', 'omom']);
console.log("----------------");
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);