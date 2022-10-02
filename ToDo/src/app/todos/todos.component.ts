
// import { Dialog, DialogRef } from '@angular/cdk/dialog';
// import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditToDoDialogComponent } from '../edit-to-do-dialog/edit-to-do-dialog.component';

import { DataService } from '../store/data.service';
import { Todo } from '../store/todo.modul';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  showValidationErrors: boolean = false

  constructor(private dataServise: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.todos = this.dataServise.getAllTodos()
  }
  onFormSubmit(form: NgForm) {
    if (form.valid) {
      this.dataServise.addTodo(new Todo(form.value.text))
      form.reset() // clear input
      this.showValidationErrors = false
    } else this.showValidationErrors = true

  }

  togglecompleted(todo: Todo) {
    todo.completed = !todo.completed;
    if (todo.completed === true) {
      let isDone = confirm("Task is done?");
      
      if (isDone === true ) {
        alert('Your task will be completed in 3 seconds');
        setTimeout(() => {
          this.todoRemove(todo)
        }, 3000);
      }

    }


  }

  editTodo(todo: Todo) {
    //this.dataServise.updateTodo()
    const index = this.todos.indexOf(todo)
    let dialogRef = this.dialog.open(EditToDoDialogComponent, { width: '600px', data: todo });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataServise.updateTodo(index, result)
      }
    })
  }

  todoRemove(todo: Todo) {
    const index = this.todos.indexOf(todo)
    this.dataServise.deleteTodo(index)
  }



}
