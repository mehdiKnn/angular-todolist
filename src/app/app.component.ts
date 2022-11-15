import { Component } from '@angular/core';
  
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public tasks: string[] = [];
  
    public newTask = '';
  
    public addToList() {
        if (this.newTask == '') {
        }
        else {
            this.tasks.push(this.newTask);
            this.newTask = '';
        }
    }
  
    public deleteTask(index: number) {
        this.tasks.splice(index, 1);
    }
}