import { Component, Input } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-battlefield',
  imports: [],
  templateUrl: './battlefield.html',
  styleUrl: './battlefield.scss',
})
export class Battlefield {
  @Input() armyForBattle: Hero[] = [];

  board: {}[][] = [];

  ngOnInit() {
    this.board = this.createBoard();
    this.placeHeroOnBoard();
  }

  createBoard() {
    const rows = 10;
    const cols = 10;
    const board: {}[][] = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push({});
      }
      board.push(row);
    }
    return board;
  }

  placeHeroOnBoard() {
    this.armyForBattle.forEach((hero, i) => {
      hero.x = 0;
      hero.y = i;
    });
  }

  getHeroAt(x: number, y: number): Hero | undefined {
    return this.armyForBattle.find(h => h.x === x && h.y === y);
  }

  setSelect(x: number, y: number) {
    this.armyForBattle.forEach(h => h.selected = false);
    const hero = this.getHeroAt(x, y);
    if (hero) {
      const i = this.armyForBattle.indexOf(hero);
      this.armyForBattle[i].selected = true;
    }
  }

  moveHeroAtBoard(x: number, y: number) {
    const hero = this.getHeroAt(x, y);

    if (hero) {
      this.setSelect(x, y);
      return;
    }

    const selectedHero = this.armyForBattle.find(h => h.selected);
    if (!selectedHero) return;
    selectedHero.move(x, y);
  }
}
