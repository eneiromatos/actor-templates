const Apify = require('apify');

Apify.main(async () => {
    const url = 'http://www.example.com/';
    // Start a browser
    const browser = await Apify.launchPuppeteer();
    // Open new tab in the browser
    const page = await browser.newPage();
    // Navigate to the URL
    await page.goto(url);
    // Capture the screenshot
    const screenshot = await page.screenshot();
    // Save the screenshot to the default key-value store
    await Apify.setValue('my-key', screenshot, { contentType: 'image/png' });
    // Close Puppeteer
    await browser.close();
});
