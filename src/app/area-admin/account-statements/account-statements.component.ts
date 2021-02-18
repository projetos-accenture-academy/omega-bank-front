import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { interval } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

import { AccountStatement, DataInterval } from './account-statements.interface';
import { AccountStatementsService } from './account-statements.service';

@Component({
  selector: 'app-account-statements',
  templateUrl: './account-statements.component.html',
  styleUrls: ['./account-statements.component.scss']
})
export class AccountStatementsComponent {
  displayedColumns: string[] = ['date', 'description', 'value'];

  accountsStatements: AccountStatement[] = [];
  interval!: DataInterval;
  isLoadingAPI: boolean = true;
  errorLoadingAPI: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private statementsService: AccountStatementsService, private auth: AuthService) {
  }

  ngOnInit() {
    this.getDataAPIInit();
  }

  getDataAPIInit() {

    const pipe = new DatePipe('pt-BR'); // Use your own locale

    const now = Date.now();

    const month = pipe.transform(now, 'MM');
    const year = pipe.transform(now, 'yyyy');
    const today = pipe.transform(now, 'd');

    this.getDataAPI(`01/${month}/${year}`, `${today}/${month}/${year}`, 'usuario01');
  }

  getDataAPI(iniDate: string, endDate: string, user: string) {
    this.errorLoadingAPI = false;
    this.isLoadingAPI = true;
    this.statementsService.getUserAccountStatements(iniDate, endDate, user).subscribe(
      result => {
        this.accountsStatements = result.accounts;
        this.getDataInterval();
        this.isLoadingAPI = false;
        this.errorLoadingAPI = false;

        console.log(result)
      },
      error => {
        this.accountsStatements = [];
        this.errorLoadingAPI = true;
        this.isLoadingAPI = false;
      }
    );
  }

  getDataInterval() {
    const pipe = new DatePipe('pt-BR'); // Use your own locale

    const now = Date.now();

    const month = pipe.transform(now, 'MM');
    const year = pipe.transform(now, 'yyyy');
    const today = pipe.transform(now, 'd');

    this.interval = { start: `${year}-${month}-01`, end: `${year}-${month}-${today}` };
    console.log(this.interval)
  }

}

