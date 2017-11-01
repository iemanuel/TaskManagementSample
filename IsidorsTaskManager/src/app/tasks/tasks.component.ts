import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public pageTitle: string = 'Tasks';
  taskList : any
  constructor() { }

  ngOnInit() {
  }

}
