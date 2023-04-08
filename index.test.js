const request = require('supertest');
const {convertCurrency} = require('./index');

describe('convertCurrency', () => {
  test('converts USD to EUR correctly', () => {
    expect(convertCurrency('USD', 'EUR', 100)).toBe(84);
  });

  test('converts EUR to USD correctly', () => {
    expect(convertCurrency('EUR', 'USD', 100)).toBe(119);
  });

  test('converts EUR to CAD correctly', () => {
    expect(convertCurrency('EUR', 'CAD', 100)).toBe(150);
  });

  test('converts GBP to CAD correctly', () => {
    expect(convertCurrency('GBP', 'CAD', 100)).toBe(174);
  });

  test('converts GBP to JPY correctly', () => {
    expect(convertCurrency('GBP', 'JPY', 100)).toBe(15171);
  });

  test('converts CAD to JPY correctly', () => {
    expect(convertCurrency('CAD', 'JPY', 100)).toBe(9017);
  });

  test('converts CAD to EUR correctly', () => {
    expect(convertCurrency('CAD', 'EUR', 100)).toBe(67);
  });

  test('converts JPY to USD correctly', () => {
    expect(convertCurrency('JPY', 'USD', 100)).toBe(0.91);
  });

  test('converts EUR to GBP correctly', () => {
    expect(convertCurrency('EUR', 'GBP', 100)).toBe(86);
  });

  test('converts CAD to EUR correctly', () => {
    expect(convertCurrency('CAD', 'EUR', 100)).toBe(67);
  });
});

