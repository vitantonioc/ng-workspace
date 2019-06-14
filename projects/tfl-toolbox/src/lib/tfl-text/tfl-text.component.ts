import { Component, OnInit, Input, Self, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseControl } from '@tfl/core';

@Component({
  selector: 'tfl-text',
  templateUrl: './tfl-text.component.html',
  styleUrls: ['./tfl-text.component.css']
})
export class TflTextComponent extends BaseControl implements OnInit {
  @Input() label;

  constructor(@Self() @Optional() ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit() {}
}
