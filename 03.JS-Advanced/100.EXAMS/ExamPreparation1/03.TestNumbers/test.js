let { expect } = require('chai');
let testNumbers = require('./testNumbers');


describe("Tests …", function () {
    describe("Sum check", function () {
        it("correct input", function () {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
            expect(testNumbers.sumNumbers(-1, 1)).to.equal('0.00');
            expect(testNumbers.sumNumbers(1.5, 1.252)).to.equal('2.75');
        });
        it("incorrect input", function () {
            expect(testNumbers.sumNumbers('', '')).to.be.undefined;
            expect(testNumbers.sumNumbers('a', 'a')).to.be.undefined;
            expect(testNumbers.sumNumbers(1, '2')).to.be.undefined;
            expect(testNumbers.sumNumbers('1', 2)).to.be.undefined;
            expect(testNumbers.sumNumbers({}, {})).to.be.undefined;
            expect(testNumbers.sumNumbers([], [])).to.be.undefined;
        });
        it("single parameter", function () {
            expect(testNumbers.sumNumbers(1)).to.be.undefined;
        });
    });
    describe('Number Checker', () => {
        it('isNAN check', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();
        });
        it('correct input', () => {
            expect(testNumbers.numberChecker('')).to.equal("The number is even!");
            expect(testNumbers.numberChecker(2)).to.equal("The number is even!");
            expect(testNumbers.numberChecker('2')).to.equal("The number is even!");
            expect(testNumbers.numberChecker(1)).to.equal("The number is odd!");
            expect(testNumbers.numberChecker(1.5)).to.equal("The number is odd!");
        });
    });
    describe('average sum Array', () => {
        it('sum check', () => {
            expect(testNumbers.averageSumArray([2, 2, 2])).to.equal(2);
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
        });
    });
});