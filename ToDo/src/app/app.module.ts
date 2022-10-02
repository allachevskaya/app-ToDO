import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './todos/todos.component';
import { EditToDoDialogComponent } from './edit-to-do-dialog/edit-to-do-dialog.component';
import { TodoItemComponent } from './todo-item/todo-item.component';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    EditToDoDialogComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
