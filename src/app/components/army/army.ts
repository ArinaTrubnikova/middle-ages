import { Component, Input, output } from "@angular/core";
import { UnitFactory } from '../fabrics/unit-factory'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Hero } from "../hero/hero";

@Component({
    selector: 'app-army',
    standalone: true,
    templateUrl: './army.html',
    styleUrl: './army.scss',
    imports: [FormsModule, ReactiveFormsModule]
})
export class Army {
    fabric: UnitFactory = new UnitFactory();

    @Input() army: Hero[] = [];
    @Input() cost!: number | undefined;
    isSoldiersBought = output<number>();

    getImagePath(type: string): string {
        const images: Record<string, string> = {
            'fire': '../../assets/fire.png',
            'water': '../../assets/water.png',
            'earth': '../../assets/earth.png',
            'air': '../../assets/air.png',
        };

        return images[type] || '';
    }

    removeSoldier(index: number) {
        this.isSoldiersBought.emit(index);
        this.army.splice(index, 1);
    }
}