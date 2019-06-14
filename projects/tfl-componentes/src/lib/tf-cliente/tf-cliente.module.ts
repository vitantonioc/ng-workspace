import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TflToolboxModule } from '@tfl/toolbox';
import { RestInterceptor } from '@tfl/core';

import { TfClienteRoutingModule } from './tf-cliente.routing.module';
import { TfClienteService } from './services/tf-cliente-service';

import { TfClienteListComponent } from './tf-cliente-list/tf-cliente-list.component';
import { TfClienteEditComponent } from './tf-cliente-edit/tf-cliente-edit.component';

@NgModule({
  declarations: [
    TfClienteListComponent,
    TfClienteEditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TflToolboxModule,
    TfClienteRoutingModule,
  ],
  providers: [
    TfClienteService,
    {
      // utilizzo un interceptor di chiamate rest per simulare
      // l'API di un backend usando il localdb
      provide: HTTP_INTERCEPTORS,
      useClass: RestInterceptor,
      multi: true
    }
  ]
})
export class TfClienteModule { }
