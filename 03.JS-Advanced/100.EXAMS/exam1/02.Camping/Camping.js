class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
        this.checkListOfParticipants = [];
    }
    registerParticipant(name, condition, money) {
        if (!Object.keys(this.priceForTheCamp).includes(condition)) {
            throw new Error("Unsuccessful registration at the camp.");
        };
        // this.listOfParticipants.push(name);
        if (this.checkListOfParticipants.includes(name)) {
            return `The ${name} is already registered at the camp.`;
        };
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        this.checkListOfParticipants.push(name);
        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });
        return `The ${name} was successfully registered.`;
    };
    unregisterParticipant(name) {
        if (!this.checkListOfParticipants.includes(name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        } else {
            this.checkListOfParticipants = this.checkListOfParticipants.filter(x => x != name);
            this.listOfParticipants = this.listOfParticipants.filter(y => y.name != name);
            return `The ${name} removed successfully.`;
        }

    };
    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame == 'WaterBalloonFights') {
            if (!this.checkListOfParticipants.includes(participant1) || !this.checkListOfParticipants.includes(participant2)) {
                throw new Error(`Invalid entered name/s.`)
            };
            let p1Index = this.checkListOfParticipants.indexOf(participant1);
            let p2Index = this.checkListOfParticipants.indexOf(participant2);
            if (this.listOfParticipants[p1Index].condition != this.listOfParticipants[p2Index].condition) {
                throw new Error(`Choose players with equal condition.`);
            };
            if (this.listOfParticipants[p1Index].power > this.listOfParticipants[p2Index].power) {
                this.listOfParticipants[p1Index].wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if (this.listOfParticipants[p1Index].power < this.listOfParticipants[p2Index].power) {
                this.listOfParticipants[p2Index].wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`;
            };
        }

        else if (typeOfGame == 'Battleship') {
            if (!this.checkListOfParticipants.includes(participant1)) {
                throw new Error(`Invalid entered name/s.`)
            };
            let p1Index = this.checkListOfParticipants.indexOf(participant1);
            this.listOfParticipants[p1Index].power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    };
    toString() {
        let result = [`${this.organizer} will take ${this.checkListOfParticipants.length} participants on camping to ${this.location}`];
        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        sorted.forEach(element => result.push(`${element.name} - ${element.condition} - ${element.power} - ${element.wins}`))
        return result.join('\n')
    };
};
//input1
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));   // The money is not enough to pay the stay at the camp.
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));  // The Petar Petarson was successfully registered.
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));  // The Petar Petarson is already registered at the camp.
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));      // Uncaught Error: Unsuccessful registration at the camp.

//input2
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));   //The Petar Petarson was successfully registered.
// console.log(summerCamp.unregisterParticipant("Petar"));                          //Uncaught Error: The Petar is not registered in the camp.
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));                 //The Petar Petarson removed successfully.

// //input3
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));   //The Petar Petarson was successfully registered.
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));   //The Petar Petarson successfully completed the game Battleship.
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));   //The Sara Dickinson was successfully registered.
// // console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));   //Uncaught Error: Choose players with equal condition.
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));  //The Dimitur Kostov was successfully registered.
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov")); // The Petar Petarson is winner in the game WaterBalloonFights.

//  input4
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));   //The Petar Petarson was successfully registered.
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));   //The Petar Petarson successfully completed the game Battleship.
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));  //The Sara Dickinson was successfully registered.
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson")); //Uncaught Error: Choose players with equal condition.
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));   //The Dimitur Kostov was successfully registered.
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));  //The Petar Petarson is winner in the game WaterBalloonFights.

console.log(summerCamp.toString());  //Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
                                     // Petar Petarson - student - 120 - 1
                                     // Sara Dickinson - child - 100 - 0
                                     // Dimitur Kostov - student - 100 - 0








