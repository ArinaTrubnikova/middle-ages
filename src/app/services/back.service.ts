import { Injectable } from "@angular/core"
import { CharacterType, ElementType } from "../models/types/type";
import { Hero } from "../components/hero/hero";

@Injectable({
    providedIn: 'root',
})
export class BackService {
    multipliers: Record<CharacterType, number>;
    elements: Record<ElementType, number>;
    hero = new Hero();

    constructor() {
        this.multipliers = {
            mage: 1.4,
            elf: 1.3,
            warrior: 1.2,
        };

        this.elements = {
            air: 1.1,
            earth: 1.2,
            water: 1.3,
            fire: 1.4,
        };
    }

    getCost(character: CharacterType | null, type: ElementType | null): number | undefined {
        if (!character) return undefined;

        const base = this.hero.cost * this.multipliers[character];

        if (!type) {
            return Math.round(base);
        }
        const elementMultiplier = this.elements[type] ?? 1;
        return Math.round(base * elementMultiplier);
    }

}
