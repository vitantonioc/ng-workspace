import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TflToolboxModule } from '@tfl/toolbox';
import { RestInterceptor } from '@tfl/core';

import { ProductoRoutingModule } from './producto.routing.module';
import { ProductoService } from './services/producto-service';

import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';

@NgModule({
  declarations: [
    ProductoListComponent,
    ProductoEditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TflToolboxModule,
    ProductoRoutingModule,
  ],
  providers: [
    ProductoService,
    {
      // utilizzo un interceptor di chiamate rest per simulare
      // l'API di un backend usando il localdb
      provide: HTTP_INTERCEPTORS,
      useClass: RestInterceptor,
      multi: true
    }
  ]
})
export class ProductoModule { }
