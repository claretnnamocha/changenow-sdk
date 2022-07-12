export interface listAvailableCurrencies {
  buy?: boolean;
  sell?: boolean;
  active?: boolean;
  flow?: 'standard' | 'fixed-rate';
}

export interface minimalExchangeAmount {
  from: string;
  to: string;
  fromNetwork: string;
  toNetwork: string;
  flow?: 'standard' | 'fixed-rate';
}

export interface listAllAvailablePairs {
  from?: string;
  to?: string;
  fromNetwork?: string;
  toNetwork?: string;
  flow?: 'standard' | 'fixed-rate';
}

export interface exchangeRange {
  from?: string;
  to?: string;
  fromNetwork?: string;
  toNetwork?: string;
  flow?: 'standard' | 'fixed-rate';
}

export interface estimatedExchangeAmount {
  from: string;
  to: string;
  fromAmount: number;
  toAmount?: number;
  fromNetwork?: string;
  toNetwork?: string;
  flow?: 'standard' | 'fixed-rate';
  type?: 'direct' | 'reverse';
  useRateId?: boolean;
}

export interface createExchangeTransaction {
  fromCurrency: string;
  fromNetwork: string;
  toCurrency: string;
  toNetwork: string;
  fromAmount: number;
  toAmount?: number;
  address: string;
  extraId?: string;
  refundAddress?: string;
  refundExtraId?: string;
  userId?: string;
  payload?: string;
  contactEmail?: string;
  flow?: 'standard' | 'fixed-rate';
  type?: 'direct' | 'reverse';
  rateId?: string;
}

export interface transactionStatus {
  id: string;
}

export interface addressValidation {
  currency: string;
  address: string;
}

export interface userAddresses {
  name: string;
}

export interface estimatedExchangeNetworkFee {
  fromCurrency: string;
  toCurrency: string;
  fromAmount: number;
  fromNetwork?: string;
  toNetwork?: string;
  convertedCurrency?: string;
  convertedNetwork?: string;
}

export interface marketEstimateFiatCryptoToCrypto {
  fromCurrency: string;
  toCurrency: string;
  fromAmount?: number;
  toAmount?: number;
  type?: 'direct' | 'reverse';
}

export interface exchanges {
  limit?: number;
  offset?: number;
  sortDirection?: 'ASC' | 'DESC';
  sortField?: 'createdAt' | 'updatedAt';
  dateField?: 'createdAt' | 'updatedAt';
  dateFrom?: string;
  dateTo?: string;
  requestId?: string;
}
