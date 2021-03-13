//@ts-check

const {webkit} = require('playwright');

(async () => {
    const desiredDate = '14'
    const desiredTime = '9:00 AM'

    const browser = await webkit.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://south-shore-country-club.book.teeitup.golf/');

    // current date
    await page.click('.jss342')

    // Google Calendar desired date
    await page.click(`.jss264:has-text("${desiredDate}")`)

    // Google Calendar OK
    await page.click('.jss197:has-text("OK")')

    // Desired Time
    await page.click(`button:below(.jss49.jss56:has-text("${desiredTime}"))`)

    // Agree and Continue
    await page.click('#cboAgreeTOC')
    await page.click('span:has-text("Continue to Book")')

    // await page.waitForSelector(teeTimeSelector);
    await page.screenshot({path: `example.png`});
    await browser.close();
})();