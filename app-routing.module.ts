import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LgnComponent } from './login/lgn/lgn.component';
import { DashComponent } from './dash/dash/dash.component';
import { ErrComponent } from './err/err/err.component';

const routes: Routes = [
  {path :'',component: LgnComponent},
  {path:'dash/:usNm',component:DashComponent},
  {path : 'err' , component : ErrComponent},
  {path : '**',component : ErrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
