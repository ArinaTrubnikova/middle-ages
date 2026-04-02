import { Component, Input } from '@angular/core';
import { Hero } from '../hero/hero';
import { Cell } from '../../models/interfaces/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-battlefield',
  imports: [CommonModule],
  templateUrl: './battlefield.html',
  styleUrl: './battlefield.scss',
})
export class Battlefield {
  @Input() armyForBattle: Hero[] = [];

  board: Cell[][] = [];

  ngOnInit() {
    this.board = this.createBoard();
    this.placeHeroOnBoard();
  }

  createBoard() {
    const rows = 10;
    const cols = 10;
    const board = [];

    for (let i = 0; i < rows; i++) {
      const row: Cell[] = [];
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
      this.board[i][0].hero = hero;
    });
  }

  getHeroAt(x: number, y: number): Hero | null {
    return this.board[y][x].hero || null;
  }

  getType(cell: Cell) {
    let cellType = cell.hero?.type
    switch (cellType) {
      case 'air':
        return 'cell__air';
      case 'water':
        return 'cell__water';
      case 'earth':
        return 'cell__earth';
      case 'fire':
        return 'cell__fire';
      default:
        return 'cell';
    }
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
    const targetHero = this.getHeroAt(x, y);
    const selectedHero = this.armyForBattle.find(h => h.selected);

    if (targetHero) {
      if (targetHero === selectedHero) return;

      if (selectedHero) {
        this.attackEnemy(targetHero, selectedHero);
      }

      this.armyForBattle.forEach(h => h.selected = false);
      targetHero.selected = true;

      return;
    }

    if (selectedHero) {
      this.board[selectedHero.y][selectedHero.x].hero = undefined;
      this.board[y][x].hero = selectedHero;
      selectedHero.move(x, y);
    }
  }

  attackEnemy(targetHero: Hero, myHero: Hero) {
    const hp = targetHero.hp - myHero.damage;
    targetHero.attack(hp);

  }
}
