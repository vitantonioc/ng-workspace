import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TflShellComponent } from './tfl-shell/tfl-shell.component';
import { TflNavbarComponent } from './tfl-shell/tfl-navbar/tfl-navbar.component';
import { TflFooterComponent } from './tfl-shell/tfl-footer/tfl-footer.component';
import { TflTextComponent } from './tfl-text/tfl-text.component';
import { TflSelectComponent } from './tfl-select/tfl-select.component';
import { TflCheckComponent } from './tfl-check/tfl-check.component';
import { TflFormCardComponent } from './tfl-form-card/tfl-form-card.component';
import { TflTableComponent } from './tfl-table/tfl-table.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    TflShellComponent,
    TflNavbarComponent,
    TflFooterComponent,
    TflTextComponent,
    TflSelectComponent,
    TflCheckComponent,
    TflFormCardComponent,
    TflTableComponent
  ],
  exports: [
    TflShellComponent,
    TflTextComponent,
    TflSelectComponent,
    TflCheckComponent,
    TflFormCardComponent,
    TflTableComponent
  ]
})
export class TflToolboxModule { }
