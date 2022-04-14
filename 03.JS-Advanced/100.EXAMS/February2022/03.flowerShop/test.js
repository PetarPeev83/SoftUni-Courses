const { expect } = require('chai');
const flowerShop = require('./flowerShop.js');

describe("Tests …", function () {
    describe("calcPriceOfFlowers Tests…", function () {
        it("It works", function () {
            expect(flowerShop.calcPriceOfFlowers('rose', 1, 3)).to.equals("You need $3.00 to buy rose!");
            expect(flowerShop.calcPriceOfFlowers('rose', 2, 2)).to.equals("You need $4.00 to buy rose!");
            expect(flowerShop.calcPriceOfFlowers('rose', 2, 0)).to.equals("You need $0.00 to buy rose!");
            expect(flowerShop.calcPriceOfFlowers('rose', 0, 2)).to.equals("You need $0.00 to buy rose!");
        });
        it("Invalid input", function () {
            expect(() => flowerShop.calcPriceOfFlowers('rose', 1.5, 3.5)).to.throws();
            expect(() => flowerShop.calcPriceOfFlowers(1, 2, 2)).to.throws();
            expect(() => flowerShop.calcPriceOfFlowers('rose', NaN, NaN)).to.throws();
            expect(() => flowerShop.calcPriceOfFlowers(undefined, undefined, undefined)).to.throws();
            expect(() => flowerShop.calcPriceOfFlowers({}, {}, {})).to.throws();
            expect(() => flowerShop.calcPriceOfFlowers([], [], [])).to.throws();
        });
        it("Missing parameter", function () {
            expect(() => flowerShop.calcPriceOfFlowers('rose', 1)).to.throws();
            expect(() => flowerShop.calcPriceOfFlowers(2, 2)).to.throws();
        });
    });

    describe("checkFlowersAvailable Tests…", function () {
        it("It works", function () {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equals("The Rose are available!");
            expect(flowerShop.checkFlowersAvailable('None', ["Rose", "Lily", "Orchid"])).to.equals("The None are sold! You need to purchase more!");
        });
    });

    describe("sellFlowers Tests…", function () {
        it("It works", function () {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equals("Rose / Orchid");
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equals("Lily / Orchid");
        });
        it("Missing parameter", function () {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"])).to.throws();
            expect(() => flowerShop.sellFlowers(1)).to.throws();
        });
        it("Invalid input", function () {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1.5)).to.throws();
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 4)).to.throws();
            expect(() => flowerShop.sellFlowers([], 0)).to.throws();
            expect(() => flowerShop.sellFlowers(1, 2)).to.throws();
            expect(() => flowerShop.sellFlowers(NaN, NaN)).to.throws();
            expect(() => flowerShop.sellFlowers(undefined, undefined)).to.throws();
            expect(() => flowerShop.sellFlowers({}, {})).to.throws();
            expect(() => flowerShop.sellFlowers([], [])).to.throws();
        });
    });
});
