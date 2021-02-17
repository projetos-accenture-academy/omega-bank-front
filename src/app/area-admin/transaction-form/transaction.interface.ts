export interface Transaction {
  transactionType: string;
  accountPlan: number;
  sourceAccount: number;
  destinationAccount: string;
  destinationAccountType: string;
  date: Date;
  value: number;
  description: string;

}

