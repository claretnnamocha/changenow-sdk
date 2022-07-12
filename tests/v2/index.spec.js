const assert = require('assert');
const { config } = require('dotenv');
const ChangeNow = require('../../lib');

config();

const apikey = process.env.API_KEY || '';

ChangeNow.setApiKey(apikey);

describe('V2', () => {
  it('should list all available currencies', async () => {
    const data = await ChangeNow.v2.listAvailableCurrencies({});
    assert(Array.isArray(data));
  });

  it('should list all available pairs', async () => {
    const data = await ChangeNow.v2.listAllAvailablePairs({});
    assert(Array.isArray(data));
  });

  it('should get minimal exchange amount', async () => {
    const data = await ChangeNow.v2.minimalExchangeAmount({
      from: 'usdt',
      to: 'btc',
      fromNetwork: 'eth',
      toNetwork: 'btc',
    });
    assert.ok(data.minAmount);
  });

  it('should get exchange range', async () => {
    const data = await ChangeNow.v2.exchangeRange({
      from: 'usdt',
      to: 'btc',
      fromNetwork: 'eth',
      toNetwork: 'btc',
    });
    assert.ok(data.minAmount);
  });

  it('should estimate exchange amount', async () => {
    const data = await ChangeNow.v2.estimatedExchangeAmount({
      from: 'usdt',
      to: 'btc',
      fromNetwork: 'eth',
      toNetwork: 'btc',
      fromAmount: 50,
    });
    assert.ok(data.toAmount);
  });

  it('should validate address', async () => {
    const data = await ChangeNow.v2.addressValidation({
      address: '0x57f31ad4b64095347F87eDB1675566DAfF5EC886',
      currency: 'eth',
    });
    assert.ok(data.result);
  });

  it('should estimate exchange network fee', async () => {
    const data = await ChangeNow.v2.estimatedExchangeNetworkFee({
      fromAmount: 50,
      fromCurrency: 'usdt',
      toCurrency: 'btc',
    });
    assert.ok(data.converted);
  });

  it('should get user adresses', async () => {
    const data = await ChangeNow.v2.userAddresses({ name: 'giveaway@guarda' });
    assert.ok(data.success);
  });

  it('should get exchanges', async () => {
    const data = await ChangeNow.v2.exchanges({});
    assert.ok(data.count);
  });

  it('should get market estimate fiat/crypto-to-crypto', async () => {
    const data = await ChangeNow.v2.marketEstimateFiatCryptoToCrypto({
      fromCurrency: 'usdt',
      fromAmount: 80,
      toCurrency: 'btc',
    });

    assert.ok(data.type);
  });

  it('should get transaction status', async () => {
    const data = await ChangeNow.v2.transactionStatus({ id: '1' });

    assert.ok(data.id);
  });

  it('should create exchange transaction', async () => {
    const data = await ChangeNow.v2.createExchangeTransaction({
      fromCurrency: 'btc',
      fromNetwork: 'btc',
      toCurrency: 'usdt',
      toNetwork: 'eth',
      fromAmount: 0.1,
      address: '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb',
      refundAddress: 'bc1q58sa26644p0ucgha503ych9a5zvfjhwcfsp63h',
    });

    assert.ok(data.id);
  });
});
