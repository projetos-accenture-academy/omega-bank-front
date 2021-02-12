import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-area-admin',
  templateUrl: './area-admin.component.html',
  styleUrls: ['./area-admin.component.scss']
})
export class AreaAdminComponent implements OnInit {
  @ViewChild('sidenav') elementView: ElementRef | undefined;

  mode: MatDrawerMode = 'side';

  constructor(private breakpointObserver: BreakpointObserver) {

  }

  ngOnInit(): void {
  }




}
