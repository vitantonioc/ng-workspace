import { Component, Input } from '@angular/core';
import { RouteNav } from '@tfl/core';

@Component({
  selector: 'tfl-navbar',
  templateUrl: './tfl-navbar.component.html',
  styleUrls: ['./tfl-navbar.component.css']
})
export class TflNavbarComponent {
  @Input() routes: RouteNav[];

}
