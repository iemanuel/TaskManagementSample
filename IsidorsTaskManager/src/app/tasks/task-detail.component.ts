import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ITask } from '../models/task';
import { TaskService } from '../services';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  errorMessage: any;
  pageTitle: string = 'Task Detail';
  task: ITask;
  constructor(private _route: ActivatedRoute,
    private _router: Router,private _taskService: TaskService) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this._taskService.getTask(id)
    .subscribe(task => {
        this.task = task;
        
    },
        error => this.errorMessage = <any>error);

  }
  onBack(): void {
    this._router.navigate(['/boards']);
  }

}
