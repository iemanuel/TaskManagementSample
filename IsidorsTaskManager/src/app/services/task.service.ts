import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ITask } from '../models/task';

@Injectable()
export class TaskService {
    private _tasksUrl = '../api/tasks/tasks.json';

    constructor(private _http: HttpClient) { }

    getTask(id:number): Observable<ITask> {
        return this.getTasks()
          .map(tasks => tasks.filter(task => task.Id=== id)[0])
          .do(data => console.log('Task: ' + JSON.stringify(data)))
          .catch(this.handleError);}

    getTasks(): Observable<ITask[]> {
        return this._http.get<ITask[]>(this._tasksUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }
}
