export class Hero {
    constructor(
        public hp = 100,
        public armor = 50,
        public damage = 20,
        public name = '',
        public canFly = false,
        public type = '',
        public cost = 10,
    ) { }

    clone(): Hero {
        return Object.assign(
            Object.create(Object.getPrototypeOf(this)),
            this
        );
    }
}