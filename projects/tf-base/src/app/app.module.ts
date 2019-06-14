import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { TflToolboxModule } from '@tfl/toolbox';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
    HttpClientModule,
    AppRoutingModule,
    TflToolboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
