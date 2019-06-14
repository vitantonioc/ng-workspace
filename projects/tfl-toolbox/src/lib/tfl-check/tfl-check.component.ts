import { Component, OnInit, Input, Self, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseControl } from '@tfl/core';

@Component({
  selector: 'tfl-check',
  templateUrl: './tfl-check.component.html',
  styleUrls: ['./tfl-check.component.css']
})
export class TflCheckComponent extends BaseControl implements OnInit {
  @Input() label;

  constructor(@Self() @Optional() ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit() {}

  toggle(e) {
    this.value = !this.value;
  }
}
