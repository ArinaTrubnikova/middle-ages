// import { Hero } from "../hero/hero";
// import { PrototypeRegistry } from "../prototype/prototype";
// import { ElementType } from "../types/type";

// export class Warrior extends Hero {
//     // hero!: Hero;

//     constructor(type: ElementType | null) {
//         super();
//         // const prototype = PrototypeRegistry.getInstance().hero;
//         // this.hero = prototype.clone();

//         this.init();
//         if (type) {
//             this.addElement(type);
//         }
//     }

//     private init() {
//         this.hp *= 1.4;
//         this.armor *= 1.2;
//         this.damage *= 1.5;
//         this.name = 'Warrior 🗡️';
//         this.cost *= 5;
//     }

//     private addElement(type: ElementType | null) {
//         switch (type) {
//             case 'air':
//                 this.createWarriorAir();
//                 break;
//             case 'earth':
//                 this.createWarriorEarth();
//                 break;
//             case 'fire':
//                 this.createWarriorFire();
//                 break;
//             case 'water':
//                 this.createWarriorWater();
//                 break;
//             case null:
//                 this.createWarrior();
//                 break;
//         }
//     }
//     public getSword() {
//         console.log(`${this.type} sword ${this.damage} dmg`);
//     }

//     private createWarriorAir() {
//         this.type = 'air';
//         this.canFly = true;
//         this.armor = Math.round(this.armor * 1.1);
//         this.cost = Math.round(this.cost * 1.1);

//     }

//     private createWarriorEarth() {
//         this.type = 'earth';
//         this.armor = Math.round(this.armor * 1.9);
//         this.damage = Math.round(this.damage * 1.4);
//         this.hp = Math.round(this.hp * 1.4);
//         this.cost = Math.round(this.cost * 1.2);

//     }

//     private createWarriorFire() {
//         this.type = 'fire';
//         this.damage = Math.round(this.damage * 1.9);
//         this.hp = Math.round(this.hp * 1.2);
//         this.cost = Math.round(this.cost * 1.3);

//     }

//     private createWarriorWater() {
//         this.type = 'water';
//         this.damage = Math.round(this.damage * 1.5);
//         this.hp = Math.round(this.hp * 1);
//         this.cost = Math.round(this.cost * 1.4);

//     }

//     private createWarrior() {
//         this.type = '';
//         this.damage = Math.round(this.damage * 0.7);
//         this.hp = Math.round(this.hp * 0.5);
//         this.armor = Math.round(this.armor * 0.4);
//     }
// }