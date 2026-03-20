import { ElementType } from "../../models/types/type";
import { Hero } from "../hero/hero";
// import { PrototypeRegistry } from "../../prototype/prototype";

export class Mage extends Hero {
    // hero!: Hero;

    constructor(type: ElementType | null) {
        super();
        // const prototype = PrototypeRegistry.getInstance().hero;
        // this.hero = prototype.clone();

        this.init();
        this.addElement(type);
    }

    private init() {
        this.hp *= 1.2;
        this.armor *= 0.8;
        this.damage *= 1.2;
        this.name = 'Mage 🧙‍♂️';
        this.cost *= 0.6;
    }

    public getBall() {
        console.log(`${this.type} ball ${this.damage} dmg`);
    }

    private addElement(type: ElementType | null) {
        switch (type) {
            case 'air':
                this.createMageAir();
                break;
            case 'earth':
                this.createMageEarth();
                break;
            case 'fire':
                this.createMageFire();
                break;
            case 'water':
                this.createMageWater();
                break;
            case null:
                this.createMage();
                break;
        }
    }

    private createMageAir() {
        this.type = 'air';
        this.canFly = true;
        this.armor = Math.round(this.armor * 0.6);
        // this.cost = Math.round(this.cost * 0.3);
    }

    private createMageEarth() {
        this.type = 'earth';
        this.armor = Math.round(this.armor * 1.5);
        this.damage = Math.round(this.damage * 0.8);
        this.hp = Math.round(this.hp * 1.2);
        // this.cost = Math.round(this.cost * 0.1);

    }

    private createMageFire() {
        this.type = 'fire';
        this.damage = Math.round(this.damage * 1.5);
        this.hp = Math.round(this.hp * 0.7);
        // this.cost = Math.round(this.cost * 0.3);

    }

    private createMageWater() {
        this.type = 'water';
        this.damage = Math.round(this.damage * 1.4);
        this.hp = Math.round(this.hp * 0.8);
        // this.cost = Math.round(this.cost * 0.2);
    }

    private createMage() {
        this.type = '';
        this.damage = Math.round(this.damage * 0.7);
        this.hp = Math.round(this.hp * 0.5);
        this.armor = Math.round(this.armor * 0.4);
    }
}