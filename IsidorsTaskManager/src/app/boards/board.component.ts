import { Component, OnInit } from '@angular/core';
import { ITask } from '../models/task';
import { TaskService } from '../tasks/task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  errorMessage: string;
  pageTitle: string = 'Task List';

  constructor(private _taskService: TaskService) { }
  taskList: ITask[] = [];
  ngOnInit(): void {
    this._taskService.getTasks()
            .subscribe(tasks => {
                this.taskList = tasks;
                
            },
                error => this.errorMessage = <any>error);
}

}
