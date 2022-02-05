import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Item>();

  editable = false;

  saveItem(description) {
    if (!description) return;

    this.editable = false;
    this.item.description = description;
  }

}
