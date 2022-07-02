export interface listAvailableCurrenciesForSpecificCurrency {
  currency: string;
  fixedRate?: boolean;
}

export interface currencyInfo {
  currency: string;
}

export interface listOfTransactions {
  from: string;
  to: string;
  status:
    | 'new'
    | 'waiting'
    | 'confirming'
    | 'exchanging'
    | 'sending'
    | 'finished'
    | 'failed'
    | 'refunded'
    | 'verifying';
  page?: number;
  pageSize?: number;
  dateFrom?: string;
  dateTo?: string;
}

export interface transactionStatus {
  transactionId: string;
}
