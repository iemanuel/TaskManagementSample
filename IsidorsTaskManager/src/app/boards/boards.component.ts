import { Component, OnInit } from '@angular/core';
import { TaskService, BoardService } from '../services';
import { IBoard } from '../models';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  errorMessage: string;
  pageTitle: string = 'Boards List';
  constructor(private _boardService: BoardService) { }
  boardList: IBoard[] = [];
  ngOnInit() {
    this._boardService.getBoards()
    .subscribe(boards => {
        this.boardList = boards;                
    },
        error => this.errorMessage = <any>error);
  }

}
