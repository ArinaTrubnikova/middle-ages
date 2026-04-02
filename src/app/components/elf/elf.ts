import { Hero } from "../hero/hero";
import { PrototypeRegistry } from "../prototype/prototype";
import { ElementType } from "../../models/types/type";

export class Elf extends Hero {
    // hero!: Hero;

    constructor(type: ElementType | null) {
        super();
        // const prototype = PrototypeRegistry.getInstance().hero;
        // this.hero = prototype.clone();

        this.init();
        this.addElement(type);
    }

    private init() {
        this.hp *= 1.3;
        this.armor *= 1.3;
        this.damage *= 1.1;
        this.name = 'ЭЛЬФ 🏹';
        this.cost *= 0.8;
    }

    private addElement(type: ElementType | null) {
        switch (type) {
            case 'air':
                this.createElfAir();
                break;
            case 'earth':
                this.createElfEarth();
                break;
            case 'fire':
                this.createElfFire();
                break;
            case 'water':
                this.createElfWater();
                break;
            case null:
                this.createElf();
                break;
        }
    }

    private createElfAir() {
        this.type = 'air';
        this.canFly = true;
        this.armor = Math.round(this.armor * 1.2);
        // this.cost = Math.round(this.cost * 0.2);

    }

    private createElfEarth() {
        this.type = 'earth';
        this.canFly = true;
        this.armor = Math.round(this.armor * 1.9);
        this.damage = Math.round(this.damage * 0.4);
        this.hp = Math.round(this.hp * 1.4);
        // this.cost = Math.round(this.cost * 0.3);

    }

    private createElfFire() {
        this.type = 'fire';
        this.canFly = true;
        this.damage = Math.round(this.damage * 0.3);
        this.hp = Math.round(this.hp * 1.5);
        // this.cost = Math.round(this.cost * 0.4);

    }

    private createElfWater() {
        this.type = 'water';
        this.canFly = true;
        this.damage = Math.round(this.damage * 1.1);
        this.hp = Math.round(this.hp * 1.2);
        // this.cost = Math.round(this.cost * 0.2);

    }

    private createElf() {
        this.type = '';
        this.damage = Math.round(this.damage * 0.7);
        this.hp = Math.round(this.hp * 1);
        this.armor = Math.round(this.armor * 0.4);
    }
}