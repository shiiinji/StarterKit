const {E2EBASEURL} = process.env;

// TODO Refactoring more sophisticated way
declare const browser: any;

describe('/ (Home Page)', () => {
  let page: any;
  beforeAll(async () => {
    page = await browser.newPage();
    await page.goto(E2EBASEURL);
  });

  afterAll(async () => {
    await page.close();
  });

  test('should show top page', async () => {
    await page.waitForSelector('[data-test="welcome"]');
    const message = await page.evaluate(() => document.querySelector('[data-test="welcome"]'));
    expect(message).not.toBe(null);
  });
});
