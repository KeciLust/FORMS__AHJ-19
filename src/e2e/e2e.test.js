import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);
describe('Widget', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });
    browser = await puppeteer.launch({
      //headless: false,
      //slowMo: 100,
      //devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
    server.kill();
  });
  test('test widget', async () => {
    await page.goto(baseUrl);
    const widget = await page.$('.widget_run');
    widget.click();
    await page.waitForSelector('.widget_form');
  });
});
