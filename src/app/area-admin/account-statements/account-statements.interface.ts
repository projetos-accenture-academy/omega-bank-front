

export interface DataInterval {
  start: string;
  end: string;
}

export interface StatementData {
  id: number;
  date: string;
  description: string;
  value: number;
  transactionType: string;
  chartAccount: string;
}

export interface AccountStatement {
  id: number;
  descricao: string;
  saldo: number;
  tipo: string;
  transactions: StatementData[];
}

export interface UserAccountData {
  id: number;
  login: string;
  accounts: AccountStatement[];
}
