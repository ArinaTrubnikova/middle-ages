import { Hero } from "../hero/hero";

export class PrototypeRegistry {
    private static instance: PrototypeRegistry;

    hero = new Hero(100, 50, 20, 'hero', false);

    static getInstance() {
        if (!this.instance) {
            this.instance = new PrototypeRegistry();
        }
        return this.instance;
    }
}