import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

import { AccountStatement, DataInterval, StatementData } from '../account-statements.interface';
import { AccountStatementsService } from '../account-statements.service';
import { StatementsFilterComponent } from '../statements-filter/statements-filter.component';

@Component({
  selector: 'app-statements-list',
  templateUrl: './statements-list.component.html',
  styleUrls: ['./statements-list.component.scss'],

  // Need to remove view encapsulation so that the custom tooltip style defined in
  // `tooltip-custom-class-example.css` will not be scoped to this component's view.
  encapsulation: ViewEncapsulation.None,

})
export class StatementsListComponent implements OnInit {
  displayedColumns: string[] = ['date', 'description', 'type', 'ammount'];
  dataSource!: MatTableDataSource<StatementData>;

  isLoadingResult: boolean = true;
  statementData: StatementData[] = [];
  startDate: string | undefined;
  endDate: string | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() accountWithStatements!: AccountStatement;
  @Input() interval!: DataInterval;

  constructor(public dialog: MatDialog, private statementsService: AccountStatementsService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.startDate = this.interval.start;
    this.endDate = this.interval.end;

    this.statementData = this.accountWithStatements.statements;
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.statementData);
    this.isLoadingResult = false;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  typeEntryBadge(type: string) {
    return {
      "bg-danger": type == 'D',
      "bg-success": type == 'R',
      "bg-warning": type == 'T',
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StatementsFilterComponent, {
      width: "450px"
    });

    dialogRef.afterClosed().subscribe(result => {
      this.startDate = result.start;
      this.endDate = result.end;

      this.getAccountStatements();
    });
  }


  async getAccountStatements() {
    this.isLoadingResult = true;

    await timer(1000).pipe(take(1)).toPromise();
    this.statementsService.getUserAccountStatements().subscribe(
      result => {
        //this.statements = result.accounts.;
        console.log("TESTE")
        this.isLoadingResult = false
      },
      error => {
        alert("Ocorreu um erro na requisição");
        this.isLoadingResult = false
      }
    );
  }
}

