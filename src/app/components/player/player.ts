import { Component, inject } from '@angular/core';
import { Army } from '../../components/army/army';
import { Hero } from '../hero/hero';
import { CHARACTER_OPTIONS, ELEMENT_OPTIONS, CharacterType, ElementType } from '../../models/types/type';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UnitFactory } from '../fabrics/unit-factory';
import { BackService } from '../../services/back.service';
import { RouterLink, Router } from "@angular/router";
import { Battlefield } from '../battlefield/battlefield';

@Component({
  selector: 'app-player',
  imports: [Army, ReactiveFormsModule, RouterLink, Battlefield],
  templateUrl: './player.html',
  styleUrl: './player.scss',
})
export class PlayerInfo {
  fabric: UnitFactory = new UnitFactory();
  backService: BackService = inject(BackService);

  playerName = 'Jhonny Cage';
  money = 100;
  myArmy: Hero[] = [];
  cost!: number | undefined;
  router = inject(Router);

  characters = CHARACTER_OPTIONS;
  types = ELEMENT_OPTIONS;
  selectForm = new FormGroup({
    character: new FormControl<CharacterType | null>(null, Validators.required),
    type: new FormControl<ElementType | null>(null),
  });


  ngOnInit() {
    this.selectForm.valueChanges.subscribe(res => {
      if (!res) {
        return;
      }
      const character = res.character ? res.character : null;
      const type = res.type ? res.type : null;

      this.cost = this.backService.getCost(character, type);
    })
  }

  addSoldiers(character: CharacterType | null, type: ElementType | null) {
    if (!character) {
      return;
    }
    this.myArmy.push(this.fabric.getInstance(character, type));
    this.payForSoldiers();
  }

  payForSoldiers() {
    if (this.cost) {
      this.money -= this.cost;
    }
  }

  getMoneyForSale(index: number) {
    const soldier = this.myArmy[index];
    if (soldier) {
      this.money += soldier.cost;
    }
  }
}
