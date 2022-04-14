let { expect } = require('chai');
let rgbToHexColor = require('./rgbToHex.test');

describe('RGB Converter', () => {
    describe('Color check', () => {
        it('Convert white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });
        it('Convert black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        });
    });
    describe('Parameter check', () => {
        it('Missing parameter', () => {
            expect(rgbToHexColor(255, 255)).to.be.undefined;
        });
        it('Out of range parameters below 0', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
        });
        it('Out of range parameters over 255', () => {
            expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
        });
        it('String in the input', () => {
            expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
        });
    });
});