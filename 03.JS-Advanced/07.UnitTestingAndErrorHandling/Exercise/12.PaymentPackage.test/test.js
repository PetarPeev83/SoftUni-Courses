let { expect } = require('chai');
let paymentPackage = require('./12.PaymentPackage.test');

//NEDOVURSHENA ZADACHA !!!!!!! 

describe("Tests …", () => {
    it("Correct name check", () => {
        expect(new paymentPackage('Pesho', 1).name).to.equals('Pesho')
    });
    it("Correct value check", () => {
        expect(new paymentPackage('Pesho', 1).value).to.equals(1);
        expect(new paymentPackage('Pesho', 0).value).to.equals(0);
        expect(new paymentPackage('Pesho', 1.5).value).to.equals(1.5);
    });
    it("input name check", () => {
        expect(() => {new paymentPackage('', 1)}).to.throws();
        expect(() => {new paymentPackage(1, 1)}).to.throws();
        expect(() => {new paymentPackage([], 1)}).to.throws();
        expect(() => {new paymentPackage({}, 1)}).to.throws();
    });
    it("input value check", () => {
        expect(() => {new paymentPackage('Pesho', -1)}).to.throws();
        expect(() => {new paymentPackage('Pesho', '')}).to.throws();
        expect(() => {new paymentPackage('Pesho', [])}).to.throws();
        expect(() => {new paymentPackage('Pesho', {})}).to.throws();
    });
    it('active check', () => {
        expect(new paymentPackage('Pesho', 1).active).to.be.true;
        expect(new paymentPackage('Pesho', 1).active = false).to.be.false;
        expect(() => {new paymentPackage('Pesho', 1).active = ""}).to.throws();
        expect(() => {new paymentPackage('Pesho', 1).active = 1}).to.throws();
        expect(() =>{new paymentPackage('Pesho', 1).active = {}}).to.throws();
        expect(() => {new paymentPackage('Pesho', 1).active = []}).to.throws();
    });
    it('VAT check', () => {
        expect(new paymentPackage('Pesho', 1).VAT).to.equals(20);
        expect(new paymentPackage('Pesho', 1).VAT = 1).to.equals(1);
        expect(new paymentPackage('Pesho', 1).VAT = 1).to.equals(1);
        expect(() => {new paymentPackage('Pesho', 1).VAT = -1}).to.throws();
        expect(() => {new paymentPackage('Pesho', 1).VAT = []}).to.throws();
        expect(() => {new paymentPackage('Pesho', 1).VAT = {}}).to.throws();
        expect(() => {new paymentPackage('Pesho', 1).VAT = ""}).to.throws();
    });
    // it('toString() check', () => {

    // });
});









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