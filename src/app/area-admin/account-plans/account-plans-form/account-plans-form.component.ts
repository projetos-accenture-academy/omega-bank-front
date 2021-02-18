import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

import { AccountPlanData, AccountPlanNewData } from '../account-plans.interface';
import { AccountPlansService } from '../account-plans.service';

@Component({
  templateUrl: './account-plans-form.component.html',
  styleUrls: ['./account-plans-form.component.scss']
})
export class AccountPlansFormComponent implements OnInit {

  accountPlan: AccountPlanData | undefined;

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AccountPlanData,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AccountPlansFormComponent>,
    private planService: AccountPlansService,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmitData() {

    const accountPlan: AccountPlanNewData = {
      description: this.nameFormControl.value,
      login: this.authService.getUser()?.login,
      type: 1,
    };

    let observalbePlan: Observable<AccountPlanNewData>;

    if (this.data.id) {
      observalbePlan = this.planService.putAccountPlan(this.data);
    } else {
      observalbePlan = this.planService.postAccountPlan(accountPlan);
    }

    observalbePlan.subscribe(
      result => {
        this.openSnackBar("Plano de contas salvo com sucesso", "Fechar");
        this.dialogRef.close(result);
      },
      error => {
        this.openSnackBar("Não foi possível salvar o novo plano de contas", "Fechar");
        this.dialogRef.close(null);
      }
    );


  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
}
