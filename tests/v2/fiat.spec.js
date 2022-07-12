const assert = require('assert');
const { config } = require('dotenv');
const ChangeNow = require('../../lib');

config();

const apikey = process.env.API_KEY || '';

ChangeNow.setApiKey(apikey);

describe('V2 / Operations with fiat', () => {
  it('should perform health check', async () => {
    const data = await ChangeNow.v2.fiat.healthCheck();
    assert(data.message === 'OK');
  });

  it('should list all crypto currencies', async () => {
    const data = await ChangeNow.v2.fiat.cryptoCurrencies();
    assert.ok(Array.isArray(data));
  });

  it('should list all fiat currencies', async () => {
    const data = await ChangeNow.v2.fiat.fiatCurrencies();
    assert.ok(Array.isArray(data));
  });

  it('should get market info', async () => {
    const data = await ChangeNow.v2.fiat.marketInfo({
      to: 'usdt',
      from: 'usd',
    });

    assert(data.min);
  });

  it('should get transaction status', async () => {
    const data = await ChangeNow.v2.fiat.transactionStatus({ id: '1' });
    assert(data.message === 'OK');
  });

  it('should estimate exchange amount', async () => {
    const data = await ChangeNow.v2.fiat.estimate({
      from_amount: 1200.4,
      from_currency: 'usd',
      to_currency: 'btc',
    });
    assert(data.message === 'OK');
  });

  it('should create exchange transaction', async () => {
    const data = await ChangeNow.v2.fiat.createExchangeTransaction({
      from_currency: 'usd',
      from_amount: 1200.4,
      to_currency: 'usdt',
      to_network: 'eth',
      payout_address: '0x2fEC801A268f69Bc384B145584199F1a6F06BA94',
    });

    assert(data.id);
  });
});
