const dotenv = require('dotenv');
dotenv.config();
const PuppeteerEnvironment = require('jest-environment-puppeteer');

class CustomEnvironment extends PuppeteerEnvironment {
  async setup() {
    await super.setup();
  }

  async teardown() {
    await super.teardown();
  }
}

module.exports = CustomEnvironment;
