import { Component, Input, output } from "@angular/core";
import { UnitFactory } from '../fabrics/unit-factory'
// import { CHARACTER_OPTIONS, CharacterType, ELEMENT_OPTIONS, ElementType } from "../../models/types/type";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Hero } from "../hero/hero";
// import { BackService } from "../../services/back.service";

@Component({
    selector: 'app-army',
    standalone: true,
    templateUrl: './army.html',
    styleUrl: './army.scss',
    imports: [FormsModule, ReactiveFormsModule]
})
export class Army {
    fabric: UnitFactory = new UnitFactory();
    // backService: BackService = inject(BackService);

    @Input() army: Hero[] = [];
    @Input() cost!: number | undefined;
    isSoldiersBought = output<number>();

    // characters = CHARACTER_OPTIONS;
    // types = ELEMENT_OPTIONS;
    // selectForm = new FormGroup({
    //     character: new FormControl<CharacterType | null>(null, Validators.required),
    //     type: new FormControl<ElementType | null>(null),
    // });

    // cost!: number | undefined;

    // ngOnInit() {
    //     this.selectForm.valueChanges.subscribe(res => {
    //         if (!res) {
    //             return;
    //         }
    //         const character = res.character ? res.character : null;
    //         const type = res.type ? res.type : null;

    //         this.cost = this.backService.getCost(character, type);
    //     })
    // }

    // addSoldiers(character: CharacterType | null, type: ElementType | null) {
    //     if (!character) {
    //         return;
    //     }
    //     this.army.push(this.fabric.getInstance(character, type));
    // }

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