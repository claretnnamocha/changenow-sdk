import { getApiKey, request } from './internal';
import * as types from './types/fixed-rate-flow';

export const listOfAvailableFixedRateMarkets = async () => request({
  url: `market-info/fixed-rate/${getApiKey()}`,
  method: 'get',
});

export const estimateFixedRateExchangeAmount = async (
  body: types.estimateFixedRateExchangeAmount,
) => {
  const {
    amount, from, to, useRateId = true,
  } = body;
  return request({
    url:
      `exchange-amount/fixed-rate/${amount}/${from}_${to}`
      + `?api_key=${getApiKey()}&useRateId=${useRateId}`,
    method: 'get',
  });
};

export const estimateFixedRateExchangeAmountReverse = async (
  body: types.estimateFixedRateExchangeAmountReverse,
) => {
  const {
    amount, from, to, useRateId = true,
  } = body;
  return request({
    url:
      `exchange-deposit/fixed-rate/${amount}/${from}_${to}?`
      + `api_key=${getApiKey()}&useRateId=${useRateId}`,
    method: 'get',
  });
};

export const exchangeRangeFixedRate = async (
  body: types.exchangeRangeFixedRate,
) => {
  const { from, to, useRateId = true } = body;
  return request({
    url:
      `exchange-range/fixed-rate/${from}_${to}?`
      + `api_key=${getApiKey()}&useRateId=${useRateId}`,
    method: 'get',
  });
};

export const createFixedRateExchange = async (
  body: types.createFixedRateExchange,
) => request({
  url: `transactions/fixed-rate/${getApiKey()}`,
  method: 'post',
  body,
});

export const createReverseFixedRateExchange = async (
  body: types.createReverseFixedRateExchange,
) => request({
  url: `transactions/fixed-rate/from-result/${getApiKey()}`,
  method: 'post',
  body,
});
