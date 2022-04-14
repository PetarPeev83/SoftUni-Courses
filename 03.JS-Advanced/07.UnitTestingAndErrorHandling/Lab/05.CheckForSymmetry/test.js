let { expect } = require('chai');
let isSymmetric = require('./CheckForSymmetry');

describe('Symmetry Checker', () => {
    it('return true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('return false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });
    it('return false for non-array', () => {
        expect(isSymmetric(3)).to.be.false;
    });
    it('return false for mixed array', () => {
        expect(isSymmetric([1, 2, "1"])).to.be.false;
    });
    it('return true for array with odd num of elements', () => {
        expect(isSymmetric([3, 2, 1, 2, 3])).to.be.true;
    });
});