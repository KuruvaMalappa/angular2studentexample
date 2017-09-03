import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { StudentsComponent } from './student/students.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [ AppComponent, StudentsComponent, StudentComponent ],
  imports:      [ BrowserModule , HttpModule, FormsModule],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
