import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent  {
  name = 'malappa';
  color= 'Green';
  changeColor() {
    this.color = this.color === 'Green' ? 'blue' : 'Green';
  }
}
