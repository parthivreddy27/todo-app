import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';

  public task: string;

  public taskArray = [];

  taskAdd(){
  	console.log(this.task);
  	this.taskArray.push(this.task)
  	this.task = '';
  }

  removeTask(index) {
  	this.taskArray.splice(index,1);
  }
}
