let { expect } = require('chai');
let mathEnforcer = require('./04.MathEnforcer.test');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('check input is num', () => {
            expect(mathEnforcer.addFive('1')).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive(['1'])).to.be.undefined;
        });
        it('work with negative num', () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it('work with floating-point numbers', () => {
            expect(mathEnforcer.addFive(1.5)).to.be.within(6.5, 6.51);
        });
        it('work correctly', () => {
            expect(mathEnforcer.addFive(0)).to.be.equal(5);
        });
    });
    describe('subtractTen', () => {
        it('check input is num', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen(['1'])).to.be.undefined;
        });
        it('work with negative num', () => {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });
        it('work with floating-point numbers', () => {
            expect(mathEnforcer.subtractTen(11.5)).to.be.within(1.5, 1.51);
        });
        it('work correctly', () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });
    });
    describe('sum', () => {
        it('take two parameters', () => {
            expect(mathEnforcer.sum(5)).to.be.undefined;
        });
        it('check input is num', () => {
            expect(mathEnforcer.sum('1', '1')).to.be.undefined;
            expect(mathEnforcer.sum({}, 1)).to.be.undefined;
            expect(mathEnforcer.sum(['1'], 1)).to.be.undefined;
        });
        it('work with negative num', () => {
            expect(mathEnforcer.sum(-5, 5)).to.be.equal(0);
        });
        it('work with floating-point numbers', () => {
            expect(mathEnforcer.sum(1.5, 1.5)).to.be.within(3, 3.01);
        });
        it('work correctly', () => {
            expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
        });
    });
});