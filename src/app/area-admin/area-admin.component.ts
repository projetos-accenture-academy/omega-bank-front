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
  menuPinned: boolean = false;
  mode: MatDrawerMode = 'side';
  smallViewPort: boolean = false;
  marginLeftContent: string = '';

  constructor(private breakpointObserver: BreakpointObserver) {
    this.smallViewPort = this.breakpointObserver.isMatched('(max-width: 576px)');

  }

  ngOnInit(): void {
    if (this.smallViewPort === true) {
      console.log("OVER")
      this.mode = 'over'
    }
  }

  menuIconClick() {
    this.menuPinned = !this.menuPinned;
    this.mode = this.mode == 'side' ? 'push' : 'side';
    console.log(this.menuPinned === true ? 'visible' : 'hidden');
  }



}
