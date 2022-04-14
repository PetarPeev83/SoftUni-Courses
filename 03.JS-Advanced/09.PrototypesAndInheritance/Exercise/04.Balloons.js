function solution() {
    class Balloon {
        constructor(color, hasWeight) {
            this.color = color;
            this.hasWeight = Number(hasWeight);
        }
    };
    class PartyBalloon extends Balloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength) {
            super(color, hasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = Number(ribbonLength);
        }
        get ribbon() {
            return {
                color: this.ribbonColor,
                length: this.ribbonLength,
            }
        }
    };
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
            super(color, hasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }
        get text() {
            return this._text;
        }
        set text(text) {
            this._text = text
        }
    };
    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon,
    }
};

let classes = solution();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let testBirthdayBalloon = new classes.BirthdayBalloon("yellow", 20.5, "red", 10.25, 'Happy Birthday');
let ribbon = testBirthdayBalloon.text;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);


