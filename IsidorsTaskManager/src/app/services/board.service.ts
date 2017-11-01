import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IBoard} from '../models';

@Injectable()
export class BoardService {
    private _Url = '../api/boards/boards.json';

    constructor(private _http: HttpClient) { }

    getBoard(id:number): Observable<IBoard> {
        return this.getBoards()
          .map(tasks => tasks.filter(task => task.Id=== id)[0])
          .do(data => console.log('Task: ' + JSON.stringify(data)))
          .catch(this.handleError);}

          getBoards(): Observable<IBoard[]> {
        return this._http.get<IBoard[]>(this._Url)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }
}
