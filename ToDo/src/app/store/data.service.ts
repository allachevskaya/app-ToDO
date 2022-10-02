import { Injectable } from '@angular/core';
import { Todo } from './todo.modul';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos:Todo[] =[
 
  ]

  constructor() { }

  getAllTodos(){
    return this.todos
  }
  addTodo(todo:Todo){
    this.todos.push(todo)
  }
  updateTodo(index:number, updateTodo: Todo){
    this.todos[index] = updateTodo
  }

  deleteTodo(index:number){
    this.todos.splice(index,1)
  }
}
