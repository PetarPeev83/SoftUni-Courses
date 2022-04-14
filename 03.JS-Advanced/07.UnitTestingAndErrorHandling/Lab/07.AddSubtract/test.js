let { expect } = require('chai');
let createCalculator = require('./07.AddSubtract.test');

describe('Calculator', () => {

    let instance = {};                      //  pravim instance i za da moje predi vsiaka proverka da 
    beforeEach(() => {                      //  se zanulqva go pravim s "beforeEach" , taka ne zapazva
        instance = createCalculator();      //  stoinostite koito sme zadali na predishnata proverka;
    });

    it('Has All Methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });
    it('add numbers', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3);
    });
    it('add numbers', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3);
    });
    it('add single number', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    });
    it('add string', () => {
        instance.add("1");
        expect(instance.get()).to.equal(1);
    });
    it('subtract', () => {
        instance.add(2);
        instance.subtract(1);
        expect(instance.get()).to.equal(1);
    });
});