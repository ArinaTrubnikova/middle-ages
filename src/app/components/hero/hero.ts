export class Hero {
    constructor(
        public hp = 100,
        public armor = 50,
        public damage = 20,
        public name = '',
        public canFly = false,
        public type = '',
        public cost = 10,
        public x = 0,
        public y = 0,
        public selected = false,
    ) { }

    clone(): Hero {
        return Object.assign(
            Object.create(Object.getPrototypeOf(this)),
            this
        );
    }

    move(xBoard: number, yBoard: number) {
        if (this.selected) {
            this.x = xBoard;
            this.y = yBoard;
        }
    }

    attack(damage: number) {
        if (this.hp <= 0) {
            alert(`${this.name} is dead: ${this.hp} low hp`)
        }
        this.hp -= damage;
    }
}