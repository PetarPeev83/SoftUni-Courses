/*
const { chromium } = require('playwright-chromium');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com/');
    await page.screenshot({ path: `example.png` });
    await browser.close();
})();
*/

const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page; // Declare reusable variables

describe('E2E tests', async function () {

    this.timeout(5000); // pravim izchakvaneto da e 5 sekundi za da ne gurmiat testovete zaradi zabavianeto !!!

    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('initial load', async () => {
        await page.goto('http://localhost:5500');
        // await page.screenshot({ path: 'page.png' });
        await page.waitForSelector('.accordion'); //kazvame da izchaka dokato zaredi "class accordion" i togava da produlji kum testovete po dolu;

        const pageContent = await page.textContent('#main'); //         v sluchaia izpolzvame 'querySelector('#main)';
        expect(pageContent).to.contains('ALGOL');
        expect(pageContent).to.contains('Unix');
        expect(pageContent).to.contains('Open standard');
        expect(pageContent).to.contains('Scalable Vector Graphics');
    });

    // ako dobavim ".only" na it - shte izpulni samo tozi test - "it.only (.....)";

    it('button More works', async () => {
        await page.goto('http://localhost:5500');
        await page.waitForSelector('.accordion');

        await page.click('text=More'); // karame testa da clikne butona "More";

        // await page.waitForResponse(/articles\/details/i);

        await page.waitForSelector('.accordion p'); // chakame dokato se poiavi paragrav v clasa accordion;

        const visible = await page.isVisible('.accordion p'); // proveriava dali e vidimo sudurjanieto;

        expect(visible).to.be.true;
    });
    it('button Less works', async () => {
        await page.goto('http://localhost:5500');
        await page.waitForSelector('.accordion');

        await page.click('text=More');
        // await page.waitForResponse(/articles\/details/i);

        await page.waitForSelector('.accordion p', { state: 'visible' });

        await page.click('text=Less');
        const visible = await page.isVisible('.accordion p');

        expect(visible).to.be.false;
    });
});
