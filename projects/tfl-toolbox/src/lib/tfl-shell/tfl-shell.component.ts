import { Component, Input } from '@angular/core';
import { RouteNav } from '@tfl/core';

@Component({
  selector: 'tfl-shell',
  templateUrl: './tfl-shell.component.html',
  styleUrls: ['./tfl-shell.component.css']
})
export class TflShellComponent  {
  @Input() routes: RouteNav[];
}
