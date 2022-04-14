let { expect } = require('chai');
let cinema = require('./cinema');


describe("Tests …", function () {
    describe("showMovies check", function () {
        it("checking the length", function () {
            expect(cinema.showMovies([])).to.equals('There are currently no movies to show.');
        });
        it('correct answer', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equals('King Kong, The Tomorrow War, Joker')
        });
    });
    describe('ticketPrice check', () => {
        it('working', () => {
            expect(cinema.ticketPrice('Premiere')).to.equals(12.00);
            expect(cinema.ticketPrice('Normal')).to.equals(7.50);
            expect(cinema.ticketPrice('Discount')).to.equals(5.50);
        });
        it('invalid input', () => {
            expect(() => cinema.ticketPrice(5)).to.throws("Invalid projection type.")
        });
        it('invalid input', () => {
            expect(() => cinema.ticketPrice('something')).to.throws("Invalid projection type.")
        });
    });
    describe('swapSeatsInHall check', () => {
        it('correct answer', () => {
            expect(cinema.swapSeatsInHall(1, 2)).to.equals("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 20)).to.equals("Successful change of seats in the hall.");
        });
        it('exchange is not successful', () => {
            expect(cinema.swapSeatsInHall(1, 1)).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1)).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1.5, 1)).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 1.5)).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(21,)).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(21, 20)).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall('', 20)).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(21, '')).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(20, 21)).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-1, 1)).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, -1)).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(0, 1)).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 0)).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 'asd')).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall('asd', 1)).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall([20], 19)).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(20, [19])).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall({}, 4)).to.equals("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(4, {})).to.equals("Unsuccessful change of seats in the hall.");
        });
    });
});


















               //TEST NUMBERS
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

                  //LIBRARY
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