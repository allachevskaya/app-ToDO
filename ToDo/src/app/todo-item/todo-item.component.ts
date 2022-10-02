import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../store/todo.modul';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Todo = new Todo('')
  @Output() todoClicked: EventEmitter<void> = new EventEmitter()
  @Output() todoEdit: EventEmitter<void> = new EventEmitter()
  @Output() todoRemove: EventEmitter<void> = new EventEmitter()

 

  constructor() { }

  ngOnInit(): void {
  }

  onClickTodo() {
    this.todoClicked.emit()
  }
  onEditClick() {
    this.todoEdit.emit()
  }
  onDeleteClick(){
    this.todoRemove.emit()
  }
 

}
