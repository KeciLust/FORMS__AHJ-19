import puppeteer from 'puppeteer';

jest.setTimeout(30000);
describe('Widget', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  test('test widget', async () => {
    await page.goto(baseUrl);
    const widget = await page.$('.widget_run');
    widget.click();
    await page.waitForSelector('.widget_form');
    await browser.close();
  });
});
