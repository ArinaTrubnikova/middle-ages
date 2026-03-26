import { Component, Input } from '@angular/core';
import { Hero } from '../hero/hero';
import { Cell } from '../../models/interfaces/interfaces';

@Component({
  selector: 'app-battlefield',
  imports: [],
  templateUrl: './battlefield.html',
  styleUrl: './battlefield.scss',
})
export class Battlefield {
  @Input() armyForBattle: Hero[] = [];

  rows = 8;
  cols = 14;
  cells: Cell[] = [];

  ngOnInit() {
    this.generateBoard();
  }

  generateBoard() {
    this.cells = Array.from({ length: this.cols * this.rows }).map((_, i) => ({
      row: Math.floor(i / this.cols),
      col: i % this.cols,
      soldiers: this.armyForBattle,
    }));
  }
}
