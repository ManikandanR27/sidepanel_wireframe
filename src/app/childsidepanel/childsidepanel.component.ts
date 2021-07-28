import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childsidepanel',
  templateUrl: './childsidepanel.component.html',
  styleUrls: ['./childsidepanel.component.scss']
})
export class ChildsidepanelComponent implements OnInit {

  collapsedSidebar: any;
  
  panelOpenState = false;
  isExpanded= true;
  isShowing: boolean = false;
  showSubmenu: boolean = false;
  isExpanded1= true;
  isShowing1: boolean = false;
  showSubmenu1: boolean = false;
  
  isExpanded2= true;
  isShowing2: boolean = false;
  showSubmenu2: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
mouseenter() {
  if(this.isExpanded) {
    this.isShowing = true;
  }
  else if (this.isExpanded1) {
    this.isShowing1 = true;
  }
  else if (this.isExpanded2) {
    this.isShowing2 = true;
  }


}
mouseleave() {
  if(!this.isExpanded) {
    this.isShowing = false;
  }
  else if (!this.isExpanded1) {
    this.isShowing1 = false;
  }
  else if (!this.isExpanded2) {
    this.isShowing2 = false;
  }
}
}
