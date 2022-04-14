let { expect } = require('chai');
let isOddOrEven = require('./02.EvenOrOdd.test');

describe('input type test', () => {
    it('return undefined for number', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });
    it('return undefined for NaN', () => {
        expect(isOddOrEven(NaN)).to.be.undefined;
    });
    it('return undefined for array', () => {
        expect(isOddOrEven(['string'])).to.be.undefined;
    });
    it('return undefined for object', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });
    it('return undefined for object', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });
    it('pass with even length string', () => {
        expect(isOddOrEven('oddo')).to.be.equal('even');
    });
    it('pass with odd length string', () => {
        expect(isOddOrEven('odo')).to.be.equal('odd');
    });
    it('pass with even empty string', () => {
        expect(isOddOrEven('')).to.be.equal('even');
    });
});