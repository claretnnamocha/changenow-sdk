import { request } from '../internal';
import * as types from '../types/v2/fiat';

export const createExchangeTransaction = async (
  body: types.createExchangeTransaction,
) => {
  body.from_network = body.from_network || '';
  body.to_network = body.to_network || '';
  body.payout_extra_id = body.payout_extra_id || '';
  body.deposit_type = body.deposit_type || 'SEPA_1';
  body.payout_type = body.payout_type || 'SEPA_1';

  return request({
    url: 'fiat-transaction',
    method: 'post',
    prefix: '/v2',
    body,
  });
};

export const transactionStatus = async (body: types.transactionStatus) => {
  const { id } = body;
  return request({
    url: `fiat-status/?id=${id}`,
    method: 'get',
    prefix: '/v2',
  });
};

export const estimate = async (body: types.estimate) => {
  const {
    from_currency,
    from_amount,
    to_currency,
    from_network = '',
    to_network = '',
    deposit_type = '',
    payout_type = '',
  } = body;
  return request({
    url:
      `fiat-estimate?from_currency=${from_currency}`
      + `&from_network=${from_network}`
      + `&from_amount=${from_amount}&to_currency=${to_currency}`
      + `&to_network=${to_network}&deposit_type=${deposit_type}`
      + `&payout_type=${payout_type}`,
    method: 'get',
    prefix: '/v2',
  });
};

export const marketInfo = async (body: types.marketInfo) => {
  const { from, to } = body;
  return request({
    url: `fiat-market-info/min-max-range/${from}_${to}`,
    method: 'get',
    prefix: '/v2',
  });
};

export const healthCheck = async () => request({
  url: 'fiat-status',
  method: 'get',
  prefix: '/v2',
});

export const fiatCurrencies = async () => request({
  url: 'fiat-currencies/fiat',
  method: 'get',
  prefix: '/v2',
});

export const cryptoCurrencies = async () => request({
  url: 'fiat-currencies/crypto',
  method: 'get',
  prefix: '/v2',
});
