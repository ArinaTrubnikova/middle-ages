import { Mage } from "../mag/mage";
import { Elf } from "../elf/elf";
import { Warrior } from "../warrior/warrior";
import { CharacterType } from "../../models/types/type";
import { ElementType } from "../../models/types/type";

export class UnitFactory {
    instance = new Map();

    private setInstance(character: CharacterType, type: ElementType | null) {
        let hero;
        switch (character) {
            case 'mage':
                hero = this.instance.set(character, new Mage(type))
                break;
            case 'elf':
                hero = this.instance.set(character, new Elf(type));
                break;
            case 'warrior':
                hero = this.instance.set(character, new Warrior(type));
                break;
        }
        const key = `${character}_${type}`;
        this.instance.set(key, hero);
    }

    public getInstance(character: CharacterType, type: ElementType | null) {
        const key = `${character}_${type}`;

        if (!this.instance.has(key)) {
            this.setInstance(character, type);
        }
        return this.instance.get(character);
    }
}