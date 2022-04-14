const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

describe('Tests', async function () {
    this.timeout(6000);

    let page, browser;

    before(async () => {
        // browser = await chromium.launch({headless: false , slowMo: 500});  //  da se otvaria browsera; // (.lanch({headless: false , slowMo: 500}))- slaga se da vijdame kak se izpulniavat komandite
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close(); //  da se zatvaria browsera;
    });

    beforeEach(async () => {
        page = await browser.newPage();  // predi vseki test da otvaria nanovo stranicata;
    });

    afterEach(async () => {
        await page.close(); // sled vseki test da e zatvaria;
    });

    it('works', async () => {
        // await (new Promise(res => setTimeout(res, 2000)));
        // expect(1).to.equal(1);
        await page.goto('http://localhost:5500');
        await page.screenshot({ path: 'page.png' });
    });
    it('load and display all books', async () => {
        await page.goto('http://localhost:5500');  // zarejdame stranicata'

        await page.click('text=Load All Books');  // clikvame butona "All books";

        await page.waitForSelector('text=Harry Potter'); // izchakvame da se pokaje sadurjanieto koeto vkluchva "Harry Potter";

        const rows = await page.$$eval('tr', (rows) => rows.map(r => r.textContent.trim())); // hvashtame "tr" sus selektora i go mapvame za da vidim sudurjanieto v otdelnite redove;
        // vrushta masiv sus sudarjanieto;
        // console.log(rows);

        expect(rows[1]).to.contains('Harry Potter');
        expect(rows[1]).to.contains('Rowling');
        expect(rows[2]).to.contains('C# Fundamentals');
        expect(rows[2]).to.contains('Nakov');
    });
    it('can create book', async () => {
        await page.goto('http://localhost:5500');

        await page.fill('form#createForm >> input[name="title"]', 'Title'); // selektirame i populvame poleto "title";
        await page.fill('form#createForm >> input[name="author"]', 'Author'); // selektirame i populvame poleto "author";

        const [request] = await Promise.all([
            page.waitForRequest(request => request.method() == 'POST'),
            page.click('form#createForm >> text=Submit')
        ]);

        const data = JSON.parse(request.postData());
        // console.log(data);
        expect(data.title).to.equal('Title');
        expect(data.author).to.equal('Author');


    });
    
})