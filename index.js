const express = require('express');
const fs = require('fs');
const hbs = require('hbs');

const app = express();
const port = 3000;

const exchangeRates = {
  USD: { EUR: 0.84, GBP: 0.72, JPY: 109.25, CAD: 1.25 },
  EUR: { USD: 1.19, GBP: 0.86, JPY: 130.67, CAD: 1.50 },
  GBP: { USD: 1.38, EUR: 1.17, JPY: 151.71, CAD: 1.74 },
  JPY: { USD: 0.0091, EUR: 0.0076, GBP: 0.0066, CAD: 0.011 },
  CAD: { USD: 0.80, EUR: 0.67, GBP: 0.57, JPY: 90.17 }
};

const convertCurrency = (fromCurrency, toCurrency, amount) => {
  const rate = exchangeRates[fromCurrency][toCurrency];
  const convertedAmount = rate * amount;

  return convertedAmount;
};

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.post('/', (req, res) => {
  const { amount, fromCurrency, toCurrency } = req.body;

  const convertedAmount = convertCurrency(fromCurrency, toCurrency, amount);

  res.render('result.hbs', { amount, fromCurrency, toCurrency, convertedAmount });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
