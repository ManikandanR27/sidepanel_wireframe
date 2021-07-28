import { NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { ChildsidepanelComponent } from './childsidepanel/childsidepanel.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

const routes: Routes = [
  {
    path: '',
    component: SidePanelComponent,
    children: [ 
      {
        path: '',
        component: ChildsidepanelComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
