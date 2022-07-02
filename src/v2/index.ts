import { request } from '../internal';
import * as types from '../types/v2';

export const listAvailableCurrencies = async (
  body: types.listAvailableCurrencies,
) => {
  const { buy = null, sell = null } = body;
  return request({
    url:
      'exchange/currencies?active=&flow=standard'
      + `&buy=${buy || ''}&sell=${sell || ''}`,
    method: 'get',
    prefix: '/v2',
  });
};

export const minimalExchangeAmount = async (
  body: types.minimalExchangeAmount,
) => {
  const {
    from, to, fromNetwork, toNetwork, flow = 'standard',
  } = body;
  return request({
    url:
      `exchange/min-amount?fromCurrency=${from}&toCurrency=${to}`
      + `&fromNetwork=${fromNetwork}&toNetwork=${toNetwork}&flow=${flow}`,
    method: 'get',
    prefix: '/v2',
  });
};

export const listAllAvailablePairs = async (
  body: types.listAllAvailablePairs,
) => {
  const {
    from, to, fromNetwork, toNetwork, flow = 'standard',
  } = body;
  return request({
    url:
      `exchange/available-pairs?fromCurrency=${from}&toCurrency=${to}`
      + `&fromNetwork=${fromNetwork}&toNetwork=${toNetwork}&flow=${flow}`,
    method: 'get',
    prefix: '/v2',
  });
};

export const exchangeRange = async (body: types.exchangeRange) => {
  const {
    from, to, fromNetwork, toNetwork, flow = 'standard',
  } = body;
  return request({
    url:
      `exchange/range?fromCurrency=${from}&toCurrency=${to}&`
      + `fromNetwork=${fromNetwork}&toNetwork=${toNetwork}&flow=${flow}`,
    method: 'get',
    prefix: '/v2',
  });
};

export const estimatedExchangeAmount = async (
  body: types.estimatedExchangeAmount,
) => {
  const {
    from,
    to,
    fromAmount,
    toAmount,
    fromNetwork = '',
    toNetwork = '',
    flow = 'standard',
    type = 'direct',
    useRateId,
  } = body;
  return request({
    url:
      `exchange/estimated-amount?fromCurrency=${from}&`
      + `toCurrency=${to}&fromAmount=${fromAmount}&toAmount=${toAmount}&`
      + `fromNetwork=${fromNetwork}&toNetwork=${toNetwork}&flow=${flow}&`
      + `type=${type}&useRateId=${useRateId}`,
    method: 'get',
    prefix: '/v2',
  });
};

export const createExchangeTransaction = async (
  body: types.createExchangeTransaction,
) => request({
  url: 'exchange',
  method: 'post',
  prefix: '/v2',
  body,
});

export const transactionStatus = async (body: types.transactionStatus) => {
  const { id } = body;
  return request({
    url: `exchange/by-id?id=${id}`,
    method: 'get',
    prefix: '/v2',
    body,
  });
};

export const addressValidation = async (body: types.addressValidation) => {
  const { currency, address } = body;
  return request({
    url: `validate/address?currency=${currency}&address=${address}`,
    method: 'get',
    prefix: '/v2',
    body,
  });
};

export const userAddresses = async (body: types.userAddresses) => {
  const { name } = body;
  return request({
    url: `addresses-by-name?name=${name}`,
    method: 'get',
    prefix: '/v2',
    body,
  });
};

export const estimatedExchangeNetworkFee = async (
  body: types.estimatedExchangeNetworkFee,
) => {
  const {
    fromCurrency,
    toCurrency,
    fromAmount,
    fromNetwork = '',
    toNetwork = '',
    convertedCurrency = '',
    convertedNetwork = '',
  } = body;
  return request({
    url:
      `exchange/network-fee?fromCurrency=${fromCurrency}`
      + `&toCurrency=${toCurrency}&fromNetwork=${fromNetwork}`
      + `&toNetwork=${toNetwork}&fromAmount=${fromAmount}`
      + `&convertedCurrency=${convertedCurrency}`
      + `&convertedNetwork=${convertedNetwork}`,
    method: 'get',
    prefix: '/v2',
    body,
  });
};

export const marketEstimateFiatCryptoToCrypto = async (
  body: types.marketEstimateFiatCryptoToCrypto,
) => {
  const {
    fromCurrency,
    toCurrency,
    fromAmount = 0,
    toAmount = 0,
    type = 'direct',
  } = body;
  return request({
    url:
      `markets/estimate?fromCurrency=${fromCurrency}`
      + `&toCurrency=${toCurrency}`
      + `&fromAmount=${fromAmount || ''}`
      + `&toAmount=${toAmount || ''}&type=${type}`,
    method: 'get',
    prefix: '/v2',
    body,
  });
};

export const exchanges = async (body: types.exchanges) => {
  const {
    limit,
    offset,
    sortDirection,
    sortField,
    dateField,
    dateFrom,
    dateTo,
    requestId,
  } = body;
  return request({
    url:
      `exchanges?limit=${limit}&offset=${offset}`
      + `&sortDirection=${sortDirection}&sortField=${sortField}`
      + `&dateField=${dateField}&dateFrom=${dateFrom}&dateTo=${dateTo}`
      + `&requestId=${requestId}`,
    method: 'get',
    prefix: '/v2',
    body,
  });
};

export * as fiat from './fiat';
