const assert = require('assert');
const { config } = require('dotenv');
const ChangeNow = require('../lib');

config();

const apikey = process.env.API_KEY || '';

ChangeNow.setApiKey(apikey);

describe('Common', () => {
  it('should list available currencies', async () => {
    const data = await ChangeNow.common.listAvailableCurrencies();

    assert.ok(Array.isArray(data));
  });

  it('should get currency info', async () => {
    const data = await ChangeNow.common.currencyInfo({ currency: 'btc' });
    assert.ok(data.ticker);
  });

  it('should list available currencies for specific currency', async () => {
    const data = await ChangeNow.common.listAvailableCurrenciesForSpecificCurrency({
      currency: 'btc',
    });

    assert.ok(Array.isArray(data));
  });

  it('should get transaction list', async () => {
    const data = await ChangeNow.common.listOfTransactions({});
    assert.ok(Array.isArray(data));
  });

  it('should get transaction status', async () => {
    const data = await ChangeNow.common.transactionStatus({
      transactionId: '1',
    });

    assert.ok(data.id);
  });
});
