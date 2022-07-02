export interface estimateFixedRateExchangeAmount {
  amount: number;
  from: string;
  to: string;
  useRateId?: boolean;
}

export interface estimateFixedRateExchangeAmountReverse {
  amount: number;
  from: string;
  to: string;
  useRateId?: boolean;
}

export interface exchangeRangeFixedRate {
  from: string;
  to: string;
  useRateId?: boolean;
}

export interface createFixedRateExchange {
  from: string;
  to: string;
  address: string;
  amount: string;
  refundAddress?: string;
}

export interface createReverseFixedRateExchange {
  from: string;
  to: string;
  address: string;
  result: string;
  refundAddress?: string;
}
