import { Component, OnInit, Input, Self, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseControl } from '@tfl/core';

@Component({
  selector: 'tfl-select',
  templateUrl: './tfl-select.component.html',
  styleUrls: ['./tfl-select.component.css']
})
export class TflSelectComponent extends BaseControl implements OnInit {
  @Input() label;
  @Input() options;

  constructor(@Self() @Optional() ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit() {}

}
