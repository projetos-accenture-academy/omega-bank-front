

export interface DataInterval {
  start: string;
  end: string;
}

export interface StatementData {
  id: number;
  date: string;
  description: string;
  ammount: number;
  type: string;
  chartAccount: string;
}

export interface AccountStatement {
  id: number;
  description: string;
  balance: number;
  statements: StatementData[];
}

export interface UserAccountData {
  id: number;
  login: string;
  accounts: AccountStatement[];
}
