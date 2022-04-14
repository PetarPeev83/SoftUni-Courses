let { expect } = require('chai');
let lookupChar = require('./03.CharLookup.test');

describe('testing', () => {

    it('first parameter is not string', () => {
        expect(lookupChar(1, 2)).to.be.undefined;
        expect(lookupChar([1], 2)).to.be.undefined;
        expect(lookupChar({}, 2)).to.be.undefined;
    });
    it('second parameter is not number', () => {
        expect(lookupChar('hello', '2')).to.be.undefined;
    });
    it('second parameter is not integer number', () => {
        expect(lookupChar('hello', 1.5)).to.be.undefined;
    });
    it('value of the index out of range', () => {
        expect(lookupChar('hello', 10)).to.equal('Incorrect index');
    });
    it('value of the index is equal with the string', () => {
        expect(lookupChar('hello', 5)).to.equal('Incorrect index');
    });
    it('value of the index is negative', () => {
        expect(lookupChar('hello', -1)).to.equal('Incorrect index');
    });
    it('empty string', () => {
        expect(lookupChar('', 0)).to.equal('Incorrect index');
    });
    it('one parameter', () => {
        expect(lookupChar('0')).to.be.undefined;
    });
    it('work', () => {
        expect(lookupChar('work', 0)).to.equal('w');
    });
});