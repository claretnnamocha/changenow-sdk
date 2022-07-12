import fetch from 'node-fetch';
import * as types from './types';

const BASE_URL = 'https://api.changenow.io';

let CHANGENOW_API_KEY: string;

export const setApiKey = (key: string) => {
  CHANGENOW_API_KEY = key;
};

export const getApiKey = () => CHANGENOW_API_KEY;

export const request = async ({
  url,
  body = {},
  method,
  prefix = '/v1',
}: types.request) => {
  if (!CHANGENOW_API_KEY) {
    throw new Error('No API Key provided');
  }

  let headers: any = { 'content-type': 'application/json' };

  if (prefix === '/v2') {
    headers = {
      ...headers,
      'x-changenow-api-key': getApiKey(),
      'x-api-key': getApiKey(),
    };
  }

  let response: any = await fetch(`${BASE_URL + prefix}/${url}`, {
    body: Object.keys(body).length ? JSON.stringify(body) : undefined,
    method,
    headers,
  });
  response = await response.json();

  return response;
};
