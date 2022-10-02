import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../store/todo.modul';

@Component({
  selector: 'app-edit-to-do-dialog',
  templateUrl: './edit-to-do-dialog.component.html',
  styleUrls: ['./edit-to-do-dialog.component.scss']
})
export class EditToDoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditToDoDialogComponent>, @Inject(MAT_DIALOG_DATA) public todo:Todo ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }
  save(){}

  onFormSubmit(form:NgForm){
    if(form.invalid) return
    this.todo.text = form.value.text
    const updateTodo ={
      ...this.todo,
      ...form.value
    }
    this.dialogRef.close(updateTodo)
  }

}
