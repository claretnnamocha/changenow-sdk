import { getApiKey, request } from './internal';
import * as types from './types/standard-flow';

export const estimateExchangeAmount = async (
  body: types.estimateExchangeAmount,
) => {
  const { amount, from, to } = body;
  return request({
    url: `exchange-amount/${amount}/${from}_${to}/?api_key=${getApiKey()}`,
    method: 'get',
  });
};

export const createExchangeTransaction = async (
  body: types.createExchangeTransaction,
) => request({
  url: `transactions/${getApiKey()}`,
  method: 'post',
  body,
});

export const listOfAllAvailablePairs = async (includePartners = false) => request({
  url: `market-info/available-pairs/?includePartners=${includePartners}`,
  method: 'get',
});

export const minimalExchangeAmount = async (
  body: types.minimalExchangeAmount,
) => {
  const { from, to } = body;
  return request({
    url: `min-amount/${from}_${to}?api_key=${getApiKey()}`,
    method: 'get',
  });
};

export const exchangeRange = async (body: types.exchangeRange) => {
  const { from, to } = body;
  return request({
    url: `exchange-range/${from}_${to}?api_key=${getApiKey()}`,
    method: 'get',
  });
};
