export interface estimateExchangeAmount {
  amount: number;
  from: string;
  to: string;
}

export interface createExchangeTransaction {
  from: string;
  to: string;
  address: string;
  amount: string;
  refundAddress?: string;
}

export interface minimalExchangeAmount {
  from: string;
  to: string;
}

export interface exchangeRange {
  from: string;
  to: string;
}
