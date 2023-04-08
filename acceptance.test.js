const { remote } = require('webdriverio');
const {convertCurrency} = require('./index');

describe('Currency Converter', () => {
  let browser;

  beforeAll(async () => {
    // start the browser
    browser = await remote({
      capabilities: {
        browserName: 'chrome',
      },
    });
  });

  it('should convert USD to EUR correctly', async () => {
    // navigate to the home page
    await browser.url('https://currencyconverter-p6wc.onrender.com/');

    // enter the input values
    await browser.$('#amount').setValue('100');
    await browser.$('#fromCurrency').selectByVisibleText('USD');
    await browser.$('#toCurrency').selectByVisibleText('EUR');

    // submit the form
    await browser.$('button[type="submit"]').click();

    // assert that the conversion result is correct
    const result = await browser.$('#result').getText();
    expect(result).toBe('84');
  });

  it('should convert EUR to GBP correctly', async () => {
    // navigate to the home page
    await browser.url('https://currencyconverter-p6wc.onrender.com/');

    // enter the input values
    await browser.$('#amount').setValue('100');
    await browser.$('#fromCurrency').selectByVisibleText('EUR');
    await browser.$('#toCurrency').selectByVisibleText('GBP');

    // submit the form
    await browser.$('button[type="submit"]').click();

    // assert that the conversion result is correct
    const result = await browser.$('#result').getText();
    expect(result).toBe('86');
  });

  it('should convert GBP to JPY correctly', async () => {
    // navigate to the home page
    await browser.url('https://currencyconverter-p6wc.onrender.com/');

    // enter the input values
    await browser.$('#amount').setValue('100');
    await browser.$('#fromCurrency').selectByVisibleText('GBP');
    await browser.$('#toCurrency').selectByVisibleText('JPY');

    // submit the form
    await browser.$('button[type="submit"]').click();

    // assert that the conversion result is correct
    const result = await browser.$('#result').getText();
    expect(result).toBe('15171');
  });

  afterAll(async () => {
    // close the browser
    await browser.deleteSession();
  });
});
