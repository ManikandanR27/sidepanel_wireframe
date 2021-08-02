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
    this.isShowing2 = false;    
    this.isShowing1 = false;
  }
 if (this.isExpanded1) {
    this.isShowing1 = true;
    this.isShowing2 = false;    
    this.isShowing = false;
  }
 if (this.isExpanded2) {
    this.isShowing2 = true;    
    this.isShowing = false;
    this.isShowing1 = false;
  }


}
mouseleave() {
  if(!this.isExpanded) {
    this.isShowing = false;
    this.isShowing1 = true;
    this.isShowing2 = true;
  }
   if (!this.isExpanded1) {
    this.isShowing1 = false;
    this.isShowing = true;
    this.isShowing2 = true;
  }
   if (!this.isExpanded2) {
    this.isShowing2 = false;
    this.isShowing1 = true;
    this.isShowing = true;
  }
}
}
