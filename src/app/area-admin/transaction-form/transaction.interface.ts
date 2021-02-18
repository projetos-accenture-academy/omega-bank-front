export interface TransactionOld {
  transactionType: string;
  accountPlan: number;
  sourceAccount: number;
  destinationAccount: string;
  destinationAccountType: string;
  date: Date;
  value: number;
  description: string;
}

export interface Transaction {

  accountPlanDescription: string;
  date: string;
  description: string;
  destinationAccountName: string;
  destinationAccountType: string;
  id: number;
  sourceAccountName: string | null;
  sourceAccountType: string;
  transactionType: string;
  value: number;

}
