import { Component } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { RouteNav } from '@tfl/core';

@Component({
  selector: 'tf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes: RouteNav[];

  constructor(private router: Router) {
    this.routes = this.router.config;
  }
}
