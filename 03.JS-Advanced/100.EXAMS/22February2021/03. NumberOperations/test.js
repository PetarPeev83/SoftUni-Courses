let { expect } = require('chai');
let numberOperations = require('./03. Number Operations_Resources.test');

describe("Tests ...", function () {
    describe("powNumber tests...", function () {
        it("work", function () {
            expect(numberOperations.powNumber(2)).to.equals(4);
            expect(numberOperations.powNumber(1)).to.equals(1);
            expect(numberOperations.powNumber(0)).to.equals(0);
            expect(numberOperations.powNumber(-2)).to.equals(4);
        });
    });
    describe('numberChecker tests...', () => {
        it('work', () => {
            expect(numberOperations.numberChecker(0)).to.equals('The number is lower than 100!');
            expect(numberOperations.numberChecker(0)).to.equals('The number is lower than 100!');
            expect(numberOperations.numberChecker('')).to.equals('The number is lower than 100!');
            expect(numberOperations.numberChecker([])).to.equals('The number is lower than 100!');
            expect(numberOperations.numberChecker('0.5')).to.equals('The number is lower than 100!');
            expect(numberOperations.numberChecker(100)).to.equals('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.equals('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker("101")).to.equals('The number is greater or equal to 100!');
        });
        it('Throws Error', () => {
            expect(() => numberOperations.numberChecker(undefined)).to.throws();
            expect(() => numberOperations.numberChecker(NaN)).to.throws();
            expect(() => numberOperations.numberChecker('abc')).to.throws();
            expect(() => numberOperations.numberChecker({})).to.throws();
        });
    });
    describe('sumArrays Tests...', () => {
        it('work', () => {
            expect(numberOperations.sumArrays([1, 1, 1], [1, 1, 1])).to.deep.equals([2, 2, 2]);
            expect(numberOperations.sumArrays([1, 1, 1], [1, 1, 1 , 1 , 1])).to.deep.equals([2, 2, 2 , 1 , 1]);
            expect(numberOperations.sumArrays([1.5], [1.5])).to.deep.equals([3]);
        });
    });
});














//              CompanyAdministration
// describe("Tests …", function () {
//     describe("hiringEmployee tests...", function () {
//         it("Working ", function () {
//             expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 3)).to.equals("Pesho was successfully hired for the position Programmer.")
//             expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 3.5)).to.equals("Pesho was successfully hired for the position Programmer.")
//         });
//         it('throw Error', () => {
//             expect(() => companyAdministration.hiringEmployee('Pesho', "Driver", 3)).to.throws(`We are not looking for workers for this position.`);
//             expect(() => companyAdministration.hiringEmployee('Pesho', "Driver", 2)).to.throws(`We are not looking for workers for this position.`);
//             expect(() => companyAdministration.hiringEmployee('Pesho', "Driver", 0)).to.throws(`We are not looking for workers for this position.`);
//         });
//         it('no Experience', () => {
//             expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 2)).to.equals('Pesho is not approved for this position.');
//             expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 2.5)).to.equals('Pesho is not approved for this position.');
//             expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 0)).to.equals('Pesho is not approved for this position.');
//         });
//     });
//     describe("calculateSalary Tests...", () => {
//         it('Working', () => {
//             expect(companyAdministration.calculateSalary(1)).to.equals(15);
//             expect(companyAdministration.calculateSalary(160)).to.equals(2400);
//             expect(companyAdministration.calculateSalary(161)).to.equals(3415);
//             expect(companyAdministration.calculateSalary(10.5)).to.equals(157.5);
//             expect(companyAdministration.calculateSalary(0)).to.equals(0);
//         });
//         it('Input validate', () => {
//             expect(() => companyAdministration.calculateSalary("")).to.throws();
//             expect(() => companyAdministration.calculateSalary("string")).to.throws();
//             expect(() => companyAdministration.calculateSalary(-1)).to.throws();
//             expect(() => companyAdministration.calculateSalary({})).to.throws();
//             expect(() => companyAdministration.calculateSalary([1])).to.throws();
//         });
//     });
//     describe('firedEmployee Tests...', () => {
//         it("Working", () => {
//             expect(companyAdministration.firedEmployee(["Petar", "Ivan" , "Gosho"] , 1)).to.equals('Petar, Gosho');
//             expect(companyAdministration.firedEmployee(["Petar"] , 0)).to.equals('');
//         });
//         it ("Input validation" , () => {
//             expect(() => companyAdministration.firedEmployee({} , 0)).to.throws();
//             expect(() => companyAdministration.firedEmployee([] , 0)).to.throws();
//             expect(() => companyAdministration.firedEmployee(123 , 0)).to.throws();
//             expect(() => companyAdministration.firedEmployee("123" , 0)).to.throws();
//             expect(() => companyAdministration.firedEmployee(["Petar", "Ivan" , "Gosho"] , 3)).to.throws();
//             expect(() => companyAdministration.firedEmployee(["Petar", "Ivan" , "Gosho"] , -1)).to.throws();
//             expect(() => companyAdministration.firedEmployee(["Petar", "Ivan" , "Gosho"] , 1.5)).to.throws();
//             expect(() => companyAdministration.firedEmployee(["Petar", "Ivan" , "Gosho"]  , "0")).to.throws();
//             expect(() => companyAdministration.firedEmployee(["Petar", "Ivan" , "Gosho"]  , {})).to.throws();
//             expect(() => companyAdministration.firedEmployee(["Petar", "Ivan" , "Gosho"]  , [1])).to.throws();
//         });
//     });
// });

//            CINEMA
// describe("Tests …", function () {
//     describe("showMovies check", function () {
//         it("checking the length", function () {
//             expect(cinema.showMovies([])).to.equals('There are currently no movies to show.');
//         });
//         it('correct answer', () => {
//             expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equals('King Kong, The Tomorrow War, Joker')
//         });
//     });
//     describe('ticketPrice check', () => {
//         it('working', () => {
//             expect(cinema.ticketPrice('Premiere')).to.equals(12.00);
//             expect(cinema.ticketPrice('Normal')).to.equals(7.50);
//             expect(cinema.ticketPrice('Discount')).to.equals(5.50);
//         });
//         it('invalid input', () => {
//             expect(() => cinema.ticketPrice(5)).to.throws("Invalid projection type.")
//         });
//         it('invalid input', () => {
//             expect(() => cinema.ticketPrice('something')).to.throws("Invalid projection type.")
//         });
//     });
//     describe('swapSeatsInHall check', () => {
//         it('correct answer', () => {
//             expect(cinema.swapSeatsInHall(1, 2)).to.equals("Successful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(1, 20)).to.equals("Successful change of seats in the hall.");
//         });
//         it('exchange is not successful', () => {
//             expect(cinema.swapSeatsInHall(1, 1)).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(1)).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(1.5, 1)).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(1, 1.5)).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(21,)).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(21, 20)).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall('', 20)).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(21, '')).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(20, 21)).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(-1, 1)).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(1, -1)).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(0, 1)).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(1, 0)).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(1, 'asd')).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall('asd', 1)).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall([20], 19)).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(20, [19])).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall({}, 4)).to.equals("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(4, {})).to.equals("Unsuccessful change of seats in the hall.");
//         });
//     });
// });

//         TEST NUMBERS
// describe("Tests …", function () {
//     describe("Sum check", function () {
//         it("correct input", function () {
//             expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
//             expect(testNumbers.sumNumbers(-1, 1)).to.equal('0.00');
//             expect(testNumbers.sumNumbers(1.5, 1.252)).to.equal('2.75');
//         });
//         it("incorrect input", function () {
//             expect(testNumbers.sumNumbers('', '')).to.be.undefined;
//             expect(testNumbers.sumNumbers('a', 'a')).to.be.undefined;
//             expect(testNumbers.sumNumbers(1, '2')).to.be.undefined;
//             expect(testNumbers.sumNumbers('1', 2)).to.be.undefined;
//             expect(testNumbers.sumNumbers({}, {})).to.be.undefined;
//             expect(testNumbers.sumNumbers([], [])).to.be.undefined;
//         });
//         it("single parameter", function () {
//             expect(testNumbers.sumNumbers(1)).to.be.undefined;
//         });
//     });
//     describe('Number Checker', () => {
//         it('isNAN check', () => {
//             expect(() => testNumbers.numberChecker('a')).to.throw();
//         });
//         it('correct input', () => {
//             expect(testNumbers.numberChecker('')).to.equal("The number is even!");
//             expect(testNumbers.numberChecker(2)).to.equal("The number is even!");
//             expect(testNumbers.numberChecker('2')).to.equal("The number is even!");
//             expect(testNumbers.numberChecker(1)).to.equal("The number is odd!");
//             expect(testNumbers.numberChecker(1.5)).to.equal("The number is odd!");
//         });
//     });
//     describe('average sum Array', () => {
//         it('sum check', () => {
//             expect(testNumbers.averageSumArray([2, 2, 2])).to.equal(2);
//             expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
//         });
//     });
// });

//             LIBRARY
// describe("Tests …", () => {
//     describe("book price tests", () => {
//         it("working", () => {
//             expect(library.calcPriceOfBook('The book', 2000)).to.equal('Price of The book is 20.00');
//             expect(library.calcPriceOfBook('The book', 1980)).to.equal('Price of The book is 10.00');
//         });
//         it("check input", () => {
//             expect(() => library.calcPriceOfBook(1, 1)).to.throw();
//             expect(() => library.calcPriceOfBook('1', 1.5)).to.throw();
//             expect(() => library.calcPriceOfBook('The book', 'The book')).to.throw();
//             expect(() => library.calcPriceOfBook({}, {})).to.throw();
//             expect(() => library.calcPriceOfBook(['The book'], ['The book'])).to.throw();
//         });
//     });
//     describe('book find tests', () => {
//         it('work', () => {
//             expect(library.findBook(["Troy", "Life Style"], 'Troy')).to.equal("We found the book you want.");
//             expect(library.findBook(["Troy", "Life Style"], 'Missing')).to.equal("The book you are looking for is not here!");
//             expect(() => library.findBook([], 'No books')).to.throw();
//         });
//     });
//     describe('book arrange tests', () => {
//         it('input check', () => {
//             expect(() => library.arrangeTheBooks(-1)).to.throw();
//             expect(() => library.arrangeTheBooks(1.5)).to.throw();
//             expect(() => library.arrangeTheBooks('1')).to.throw();
//             expect(() => library.arrangeTheBooks({})).to.throw();
//             expect(() => library.arrangeTheBooks([1])).to.throw();
//         });
//         it('all the books are arranged', () => {
//             expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
//             expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
//         });
//     });
// });


//  NEDOVURSHENA
// describe("Tests …", function () {
//     describe("Properties and Methods type check", function () {
//         let christmas = new ChristmasMovies();
//         it("properties type", function () {
//             expect(typeof christmas.movieCollection).to.equals('object');
//             expect(typeof christmas.watched).to.equals('object');
//             expect(typeof christmas.actors).to.equals('object');
//         });
//         it('Methods', () => {
//             expect(typeof christmas.buyMovie).to.equals('function');
//             expect(typeof christmas.discardMovie).to.equals('function');
//             expect(typeof christmas.watchMovie).to.equals('function');
//             expect(typeof christmas.favouriteMovie).to.equals('function');
//             expect(typeof christmas.mostStarredActor).to.equals('function');
//         });
//     });
//     describe('Methods', () => {
//         let christmas = new ChristmasMovies();
//         it('buyMovie correct', () => {
//             expect(christmas.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']))
//                 .to.equals('You just got Last Christmas to your collection in which Madison Ingoldsby, Emma Thompson, Boris Isakovic are taking part!')
//             expect(christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']))
//                 .to.equals('You just got Home Alone 2 to your collection in which Macaulay Culkin are taking part!')
//         });
//         it('buyMovie throw Errors', () => {
//             expect(() => christmas.buyMovie('Home Alone 2', ['Macaulay Culkin'])).to.throws();
//         });
//         it('WatchMovie error', () => {
//             expect(() => christmas.watchMovie('Grinch')).to.throws();
//         });
//         it('discardMovie', () => {
//             expect(() => christmas.discardMovie('Grinch')).to.throws();
//             christmas.watchMovie('Last Christmas');
//             expect(christmas.discardMovie('Last Christmas')).to.equals('You just threw away Last Christmas!')
//         });
//     });
// })
