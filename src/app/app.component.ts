import {Component} from '@angular/core';
import {Task} from "./models/task";
import {iif} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  public tasks: Task[] = [];

  public newTask: Task = {
    id: 0,
    value: '',
    done: false
  };

  public addToList() {
    if (this.newTask.value !== '') {
      this.tasks.push({id: this.tasks.length, value: this.newTask.value, done: false});
      this.newTask.value = '';
    }
  }

  public completeTask(id: number) {
    const taskFind = this.tasks.find(task => task.id === id);
    if (taskFind) {
      taskFind.done = true;
    }
  }

  public tasksTodo() {
    return this.tasks.filter(task => !task.done)
  }

  public tasksDone() {
    return this.tasks.filter(task => task.done)
  }

  public completedTasksLength() {
    return this.tasksDone().length;
  }
}
