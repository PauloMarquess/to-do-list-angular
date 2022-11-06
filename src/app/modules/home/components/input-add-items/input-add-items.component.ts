import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-add-items',
  templateUrl: './input-add-items.component.html',
  styleUrls: ['./input-add-items.component.sass'],
})
export class InputAddItemsComponent implements OnInit {
  @Output() emitItemTaskList = new EventEmitter();

  addItemTaskList: string = '';
  constructor() {}

  ngOnInit(): void {}
  submitItemTaskList() {
    //Tratamento para espaços na frente e atrás
    this.addItemTaskList = this.addItemTaskList.trim();

    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = '';
    }
  }
}
