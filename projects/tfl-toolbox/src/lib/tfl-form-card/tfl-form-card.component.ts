import { Component, Input } from '@angular/core';

@Component({
  selector: 'tfl-form-card',
  templateUrl: './tfl-form-card.component.html',
  styleUrls: ['./tfl-form-card.component.css']
})
export class TflFormCardComponent {
  @Input() title: string;

}
