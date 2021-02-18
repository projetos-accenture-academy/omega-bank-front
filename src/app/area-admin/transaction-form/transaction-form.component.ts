import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

import { AccountPlanData } from '../account-plans/account-plans.interface';
import { AccountPlansService } from '../account-plans/account-plans.service';
import { Transaction } from './transaction.interface';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
  accountPlans: AccountPlanData[] = [];

  transactionForm = new FormGroup({
    ammount: new FormControl('', [
      Validators.required,
    ]),
    date: new FormControl('', [
      Validators.required,
    ]),
    description: new FormControl(''),
    accountPlan: new FormControl('', [
      Validators.required,
    ]),
    myAccount: new FormControl('', [
      Validators.required,
    ]),
    typeTransaction: new FormControl('', [
      Validators.required,
    ]),
    accountDestinationNumber: new FormControl(''),
    accountDestinationType: new FormControl('')
  });

  constructor(private snackBar: MatSnackBar, private auth: AuthService,
    private plansService: AccountPlansService,
    private transactionService: TransactionService) {


  }

  ngOnInit(): void {
    this.plansService.getAccountPlans().subscribe(
      result => {
        console.log(result)
        this.accountPlans = result;
      }, error => {
        this.openSnackBar("Não foi possível obter os planos de contas", "Fechar");
      }
    );
  }

  isTransfer() {
    return this.transactionForm.value.typeTransaction == 'T'
  }

  onSubmit() {
    const type = this.transactionForm.value.typeTransaction;
    let destName = null;
    let originName = null;
    let originType = null;
    let destType = null;

    console.log(destName, this.transactionForm.value.accountDestinationType);

    if (type == "R") {
      destName = this.auth.getUserLogin()!;
      destType = this.transactionForm.value.myAccount;
    } else if (type == "D") {
      originName = this.transactionForm.value.accountDestinationName;
      originType = this.transactionForm.value.accountDestinationType;
    } else {
      destName = this.transactionForm.value.accountDestinationType;
      destType = this.transactionForm.value.accountDestinationNumber;
      originName = this.auth.getUserLogin()!
      originType = this.transactionForm.value.myAccount;

    }

    const transactionData: Transaction = {
      id: 0,
      accountPlanDescription: this.transactionForm.value.accountPlan,
      destinationAccountType: destType,
      destinationAccountName: destName,
      date: this.transactionForm.value.date,
      value: this.transactionForm.value.ammount,
      description: this.transactionForm.value.description,
      sourceAccountName: originName,
      sourceAccountType: originType,
      transactionType: type,

    };


    this.transactionService.postTransaction(transactionData).subscribe(
      result => {
        console.log(transactionData)
        console.log(result)
        this.openSnackBar("Transação realizada com sucesso", "Fechar");
      },
      error => {
        console.log(transactionData)
        console.log(error)
        this.openSnackBar("Não foi possível realizar a transação", "Fechar");
      }
    );


  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
}
