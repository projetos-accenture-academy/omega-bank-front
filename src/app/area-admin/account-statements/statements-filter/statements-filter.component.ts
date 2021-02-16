import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './statements-filter.component.html',
  styleUrls: ['./statements-filter.component.scss']
})
export class StatementsFilterComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(
    public dialogRef: MatDialogRef<StatementsFilterComponent>) {

  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }


  onSubmit() {

    this.dialogRef.close(this.range.value);
  }
}
