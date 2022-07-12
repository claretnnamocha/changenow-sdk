export interface createExchangeTransaction {
  from_amount: number;
  from_currency: string;
  to_currency: string;
  payout_address: string;
  from_network?: string;
  to_network?: string;
  payout_extra_id?: string;
  deposit_type?:
    | 'SEPA_1'
    | 'VISA_MC1'
    | 'VISA_MC2'
    | 'LUQAPAY'
    | 'CRYPTO_THROUGH_CN';
  payout_type?:
    | 'SEPA_1'
    | 'VISA_MC1'
    | 'VISA_MC2'
    | 'LUQAPAY'
    | 'CRYPTO_THROUGH_CN';
}

export interface transactionStatus {
  id: string;
}

export interface estimate {
  from_currency: string;
  from_amount: number;
  to_currency: string;
  from_network?: string;
  to_network?: string;
  deposit_type?: string;
  payout_type?: string;
}

export interface marketInfo {
  from: string;
  to: string;
}
