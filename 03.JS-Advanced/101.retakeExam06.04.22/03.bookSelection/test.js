let { expect } = require('chai');
let bookSelection = require('./bookSelection');


describe("Tests …", function () {
    describe("isGenreSuitable Tests...", function () {
        it("Suitable book", function () {
            expect(bookSelection.isGenreSuitable("Thriller", 13)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable("Thriller", 12.5)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable("Horror", 13)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable("Comedy", 11)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable("Comedy", 1)).to.equal(`Those books are suitable`);

        });
        it("non-Suitable book", function () {
            expect(bookSelection.isGenreSuitable("Thriller", 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable("Thriller", 10)).to.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
            expect(bookSelection.isGenreSuitable("Horror", 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable("Horror", 10)).to.equal(`Books with Horror genre are not suitable for kids at 10 age`);
        });
    });
    describe("isItAffordable  Tests...", function () {
        it("work", function () {
            expect(bookSelection.isItAffordable(10, 10)).to.equal(`Book bought. You have 0$ left`);
            expect(bookSelection.isItAffordable(0, 0)).to.equal(`Book bought. You have 0$ left`);
            expect(bookSelection.isItAffordable(0, 10)).to.equal(`Book bought. You have 10$ left`);
            expect(bookSelection.isItAffordable(1.5, 2)).to.equal(`Book bought. You have 0.5$ left`);
            expect(bookSelection.isItAffordable(11, 10)).to.equal("You don't have enough money");
            expect(bookSelection.isItAffordable(10.5, 10)).to.equal("You don't have enough money");
        });
        it('Invalid input', () => {
            expect(() => bookSelection.isItAffordable(1)).to.throws;
            // expect(() => bookSelection.isItAffordable(-1, -1)).to.throws;
            expect(() => bookSelection.isItAffordable('1', '1')).to.throws;
            expect(() => bookSelection.isItAffordable(NaN, NaN)).to.throws;
            expect(() => bookSelection.isItAffordable(undefined, undefined)).to.throws;
            expect(() => bookSelection.isItAffordable({}, {})).to.throws;
            expect(() => bookSelection.isItAffordable([], [])).to.throws;
        });
    });
    describe("suitableTitles   Tests...", function () {
        it("work", function () {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller')).to.deep.equals(["The Da Vinci Code"]);
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "The Crown", genre: "Horror" }], 'Horror'))
                .to.deep.equals(["The Crown"]);
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "The Crown", genre: "Thriller" }], 'Thriller'))
                .to.deep.equals(["The Da Vinci Code", "The Crown"]);
        });
        it('Invalid input', () => {
            expect(() => bookSelection.suitableTitles(1)).to.throws;
            expect(() => bookSelection.suitableTitles([], 1)).to.throws;
            expect(() => bookSelection.suitableTitles('1', '1')).to.throws;
            expect(() => bookSelection.suitableTitles(NaN, NaN)).to.throws;
            expect(() => bookSelection.suitableTitles(undefined, undefined)).to.throws;
            expect(() => bookSelection.suitableTitles({}, {})).to.throws;
            expect(() => bookSelection.suitableTitles([], [])).to.throws;
        });
    });
});
