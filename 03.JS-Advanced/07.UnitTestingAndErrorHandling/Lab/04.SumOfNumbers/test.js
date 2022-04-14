let { expect } = require('chai');
let sum = require('./sumOfNumbers.test');

describe('sum Check', () => {

    it('sum check', () => {
        expect(sum([1, 2])).to.equal(3);
    });
    it('input is Arr check', () => {
        expect(() => sum(1, 2)).to.throw();
    });
    
    it('string check', () => {
        expect(sum(['1', '2'])).to.equal(3);
    });
})