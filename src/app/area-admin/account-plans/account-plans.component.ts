import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

import { AccountPlansFormComponent } from './account-plans-form/account-plans-form.component';
import { AccountPlanData } from './account-plans.interface';
import { AccountPlansService } from './account-plans.service';

@Component({
  selector: 'app-account-plans',
  templateUrl: './account-plans.component.html',
  styleUrls: ['./account-plans.component.scss'],

  // Need to remove view encapsulation so that the custom tooltip style defined in
  // `tooltip-custom-class-example.css` will not be scoped to this component's view.
  encapsulation: ViewEncapsulation.None,

})
export class AccountPlansComponent implements OnInit {
  displayedColumns: string[] = ['description'];
  dataSource!: MatTableDataSource<AccountPlanData>;

  isLoadingResult: boolean = true;
  errorLoadingAPI: boolean = false;
  accountPlans: AccountPlanData[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private plansService: AccountPlansService, public dialogForm: MatDialog) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getDataAPI();
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.accountPlans);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Aplica o filtro sobre o data source
   * @param event
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  openDialog(): void {
    const dialogRef = this.dialogForm.open(AccountPlansFormComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }

  async getDataAPI() {
    this.isLoadingResult = true;

    await timer(1000).pipe(take(1)).toPromise();
    this.plansService.getUserAccountPlans().subscribe(
      result => {
        this.accountPlans = result
        this.isLoadingResult = false
        this.errorLoadingAPI = false

        this.dataSource = new MatTableDataSource(this.accountPlans);
      },
      error => {
        alert("Ocorreu um erro na requisição");
        this.isLoadingResult = false
      }
    );
  }
}

