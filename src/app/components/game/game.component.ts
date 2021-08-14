import { Component, OnInit } from '@angular/core';
declare var ChessBoard: any;
@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  public board: any;
  constructor() {}

  ngOnInit(): void {
    this.board = ChessBoard('game', {
      position: 'start',
      draggable: true,
    });
  }
}
