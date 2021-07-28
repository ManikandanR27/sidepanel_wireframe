import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  collapsedSidebar: any;
  show = false;
  constructor() { }

  ngOnInit(): void {
  }
hide() {
this.show = !this.show;
}
}
