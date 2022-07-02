import { getApiKey, request } from './internal';
import * as types from './types/common';

export const listAvailableCurrencies = async (fixedRate = true) => request({
  url: `currencies?active=true&fixedRate=${fixedRate}`,
  method: 'get',
});

export const listAvailableCurrenciesForSpecificCurrency = async (
  body: types.listAvailableCurrenciesForSpecificCurrency,
) => {
  const { currency, fixedRate = true } = body;
  return request({
    url: `currencies-to/${currency}?fixedRate=${fixedRate}`,
    method: 'get',
  });
};

export const currencyInfo = async (body: types.currencyInfo) => {
  const { currency } = body;
  return request({
    url: `currencies/${currency}`,
    method: 'get',
  });
};

export const listOfTransactions = async (body: types.listOfTransactions) => {
  const {
    from,
    to,
    status,
    page = 1,
    pageSize = 50,
    dateFrom = '',
    dateTo = '',
  } = body;
  let url = `transactions/${getApiKey()}?from=${from}&to=${to}&`
    + `status=${status}&limit=${pageSize}&offset=${(page - 1) * pageSize}`;

  if (dateFrom) url += `&dateFrom=${dateFrom}`;

  if (dateTo) url += `&dateTo=${dateTo}`;

  return request({
    url,
    method: 'get',
  });
};

export const transactionStatus = async (body: types.transactionStatus) => {
  const { transactionId } = body;
  return request({
    url: `transactions/${transactionId}/${getApiKey()}`,
    method: 'get',
  });
};
