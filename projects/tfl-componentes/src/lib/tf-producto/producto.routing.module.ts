import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';

export const prodottoRoutes: Routes = [
  { path: '', component: ProductoListComponent },
  { path: ':id', component: ProductoEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(prodottoRoutes /* , { enableTracing: true } */)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
