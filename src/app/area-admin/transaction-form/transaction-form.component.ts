import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Transaction } from './transaction.interface';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
  transactionForm = new FormGroup({
    ammount: new FormControl('', [
      Validators.required,
    ]),
    date: new FormControl('', [
      Validators.required,
    ]),
    description: new FormControl('', [
      Validators.required,
    ]),
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

  constructor(private snackBar: MatSnackBar, private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  isTransfer() {
    return this.transactionForm.value.typeTransaction == 'T'
  }

  onSubmit() {

    const transactionData: Transaction = {
      transactionType: this.transactionForm.value.typeTransaction,
      accountPlan: this.transactionForm.value.accountPlan,
      sourceAccount: this.transactionForm.value.myAccount,
      destinationAccount: this.transactionForm.value.accountDestinationNumber,
      destinationAccountType: this.transactionForm.value.accountDestinationType,
      date: this.transactionForm.value.date,
      value: this.transactionForm.value.ammount,
      description: this.transactionForm.value.description
    };


    this.transactionService.postAccountPlan(transactionData).subscribe(
      result => {
        console.log(result)
        this.openSnackBar("Transação realizada com sucesso", "Fechar");
      },
      error => {
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
