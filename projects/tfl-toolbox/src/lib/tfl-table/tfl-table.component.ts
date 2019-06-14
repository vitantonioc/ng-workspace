import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ColumnField } from '../interfaces/column-field';

@Component({
  selector: 'tfl-table',
  templateUrl: './tfl-table.component.html',
  styleUrls: ['./tfl-table.component.css']
})
export class TflTableComponent {
  @Input() fields: ColumnField[];
  @Input() items: any[];
  @Input() key: string;
  @Input() description: string;
  @Output() addItem = new EventEmitter<void>();
  @Output() editItem = new EventEmitter<number>();
  @Output() deleteItem = new EventEmitter<number>();

  add() {
    this.addItem.next();
  }

  edit(id: number) {
    this.editItem.next(id);
  }

  delete(id: number, text: string) {
    const result = confirm(`Confermi la cancellazione di: ${text}`);
    if (result) {
      this.deleteItem.next(id);
    }
  }

}
