import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TfClienteListComponent } from './tf-cliente-list/tf-cliente-list.component';
import { TfClienteEditComponent } from './tf-cliente-edit/tf-cliente-edit.component';

export const tfClienteRoutes: Routes = [
  { path: '', component: TfClienteListComponent },
  { path: ':id', component: TfClienteEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(tfClienteRoutes /* , { enableTracing: true } */)],
  exports: [RouterModule]
})
export class TfClienteRoutingModule { }
