let { expect } = require('chai');
let rentCar = require('./rentCar.test.js')



describe("Tests …", function () {
    describe("search car Tests...", function () {
        it("Work", function () {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi')).to.equal(`There is 1 car of model Audi in the catalog!`);
        });
        it("Cant find model", function () {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Mercedes')).to.throws();
        });
        it("Invalid input", function () {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"])).to.throws();
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], [])).to.throws();
            expect(() => rentCar.searchCar(1, 1)).to.throws();
            expect(() => rentCar.searchCar(undefined, undefined)).to.throws();
            expect(() => rentCar.searchCar(NaN, NaN)).to.throws();
            expect(() => rentCar.searchCar({})).to.throws();
            expect(() => rentCar.searchCar([], "")).to.throws();
            expect(() => rentCar.searchCar("Volkswagen", "BMW", "Audi")).to.throws();
        });
    });
    describe('calculatePriceOfCar Tests...', () => {
        it('work', () => {
            expect(rentCar.calculatePriceOfCar('Audi', 1)).to.equals(`You choose Audi and it will cost $36!`);
            expect(rentCar.calculatePriceOfCar('Audi', 0)).to.equals(`You choose Audi and it will cost $0!`);
        });
        it('Cant find model', () => {
            expect(() => rentCar.calculatePriceOfCar('Toyota', 1)).to.throws;
        });
        it('Invalid input', () => {
            expect(() => rentCar.calculatePriceOfCar(1)).to.throws;
            expect(() => rentCar.calculatePriceOfCar('Audi', 1.5)).to.throws;
            expect(() => rentCar.calculatePriceOfCar('Audi')).to.throws;
            expect(() => rentCar.calculatePriceOfCar('audi', 1.5)).to.throws;
            expect(() => rentCar.calculatePriceOfCar('Audi', -1)).to.throws;
            expect(() => rentCar.calculatePriceOfCar('', 1)).to.throws;
            expect(() => rentCar.calculatePriceOfCar(NaN, NaN)).to.throws;
            expect(() => rentCar.calculatePriceOfCar(undefined, undefined)).to.throws;
            expect(() => rentCar.calculatePriceOfCar(0, 1)).to.throws;
            expect(() => rentCar.calculatePriceOfCar([], [1])).to.throws;
            expect(() => rentCar.calculatePriceOfCar({}, {})).to.throws;
        });
    });
    describe('checkBudget Tests...', () => {
        it('work', () => {
            expect(rentCar.checkBudget(10, 1, 11)).to.equals(`You rent a car!`);
            expect(rentCar.checkBudget(10, 10, 100)).to.equals(`You rent a car!`);
            expect(rentCar.checkBudget(10, 1, 10)).to.equals(`You rent a car!`);
            expect(rentCar.checkBudget(12, 1, 11)).to.equals(`You need a bigger budget!`);
            expect(rentCar.checkBudget(0, 10, 0)).to.equals(`You rent a car!`);
        });
        it('Invalid input', () => {
            expect(() => rentCar.checkBudget(1)).to.throws;
            expect(() => rentCar.checkBudget(1, 1)).to.throws;
            expect(() => rentCar.checkBudget('1', '1', '1')).to.throws;
            expect(() => rentCar.checkBudget(1.5, 1.5, 1.5)).to.throws;
            expect(() => rentCar.checkBudget(NaN, NaN, NaN)).to.throws;
            expect(() => rentCar.checkBudget(undefined, undefined, undefined)).to.throws;
            expect(() => rentCar.checkBudget({}, {}, {})).to.throws;
            expect(() => rentCar.checkBudget([], [], [])).to.throws;
        });
    });
});