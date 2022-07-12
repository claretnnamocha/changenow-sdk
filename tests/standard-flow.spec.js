const assert = require('assert');
const { config } = require('dotenv');
const ChangeNow = require('../lib');

config();

const apikey = process.env.API_KEY || '';

ChangeNow.setApiKey(apikey);

describe('Standard Flow (Floating Rate)', () => {
  it('should list all available pairs', async () => {
    const data = await ChangeNow.standardFlow.listOfAllAvailablePairs();

    assert.ok(Array.isArray(data));
  });

  it('should get minimal exchange amount', async () => {
    const data = await ChangeNow.standardFlow.minimalExchangeAmount({
      from: 'usdterc20',
      to: 'btc',
    });
    assert.ok(data.minAmount);
  });

  it('should get exchange range', async () => {
    const data = await ChangeNow.standardFlow.exchangeRange({
      from: 'usdterc20',
      to: 'btc',
    });
    assert.ok(data.minAmount);
  });

  it('should estimate exchange amount', async () => {
    const data = await ChangeNow.standardFlow.estimateExchangeAmount({
      from: 'usdterc20',
      to: 'btc',
      amount: 50,
    });
    assert.ok(data.estimatedAmount);
  });

  it('should create exchange transaction', async () => {
    const data = await ChangeNow.standardFlow.createExchangeTransaction({
      refundAddress: 'bc1q58sa26644p0ucgha503ych9a5zvfjhwcfsp63h',
      address: '0x2fEC801A268f69Bc384B145584199F1a6F06BA94',
      from: 'btc',
      to: 'usdterc20',
      amount: 5,
    });

    assert.ok(data.id);
  });
});
