import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { AccountPlanData } from '../account-plans.interface';
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

  constructor(public dialogRef: MatDialogRef<AccountPlansFormComponent>, private planService: AccountPlansService) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmitData() {

    // TODO: VALIDAR ANTES DO SUBMI
    //this.planService.posAccountPlan(this.nameFormControl.value);
    this.dialogRef.close(true);

  }

}
