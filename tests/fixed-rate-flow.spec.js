const assert = require('assert');
const { config } = require('dotenv');
const ChangeNow = require('../lib');

config();

const apikey = process.env.API_KEY || '';

ChangeNow.setApiKey(apikey);

describe('Fixed-Rate Flow', () => {
  it('should list available fixed rates markets', async () => {
    const data = await ChangeNow.fixedRateFlow.listOfAvailableFixedRateMarkets();
    assert.ok(Array.isArray(data));
  });

  it('should estimate fixed rate exchange amount', async () => {
    const data = await ChangeNow.fixedRateFlow.estimateFixedRateExchangeAmount({
      from: 'btc',
      to: 'usdterc20',
      amount: 10,
    });
    assert.ok(data.estimatedAmount);
  });

  it('should show exchange range fixed rate', async () => {
    const data = await ChangeNow.fixedRateFlow.exchangeRangeFixedRate({
      from: 'btc',
      to: 'usdterc20',
    });
    assert.ok(data.minAmount);
  });

  it('should estimate fixed rate exchange amount (Reverse)', async () => {
    const data = await ChangeNow.fixedRateFlow.estimateFixedRateExchangeAmountReverse({
      from: 'btc',
      to: 'usdterc20',
      amount: 0.001,
    });
    assert.ok(data.estimatedAmount);
  });

  it('should create fixed rate exchange', async () => {
    const data = await ChangeNow.fixedRateFlow.createFixedRateExchange({
      refundAddress: 'bc1q58sa26644p0ucgha503ych9a5zvfjhwcfsp63h',
      address: '0x5bccd013502f34305f8d6396b3e3a525401f59bb',
      from: 'btc',
      to: 'usdterc20',
      amount: 50,
    });
    assert.ok(data?.id);
  });

  it('should create fixed rate exchange (Reverse)', async () => {
    const data = await ChangeNow.fixedRateFlow.createReverseFixedRateExchange({
      address: 'bc1q58sa26644p0ucgha503ych9a5zvfjhwcfsp63h',
      refundAddress: '0x5bccd013502f34305f8d6396b3e3a525401f59bb',
      from: 'btc',
      to: 'usdterc20',
      result: 0.5,
    });
    assert.ok(data?.id);
  });
});
