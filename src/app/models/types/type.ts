
export type ElementType = 'water' | 'fire' | 'earth' | 'air';

export interface ElementOption {
    value: ElementType | null,
    label: string,
}

export const ELEMENT_OPTIONS: ElementOption[] = [
    // { value: null, label: 'Не выбрано' },
    { value: 'water', label: 'Вода' },
    { value: 'fire', label: 'Огонь' },
    { value: 'earth', label: 'Земля' },
    { value: 'air', label: 'Воздух' },
]

export type CharacterType = 'mage' | 'warrior' | 'elf';

export interface CharacterOption {
    value: CharacterType;
    label: string;
}

export const CHARACTER_OPTIONS: CharacterOption[] = [
    { value: 'mage', label: 'Маг' },
    { value: 'warrior', label: 'Воин' },
    { value: 'elf', label: 'Эльф' },
];

// export const COST_CHARACTERS = [
//     { name: 'mage', type: null, cost: 40 },
//     { name: 'mage', type: 'air', cost: 44 },
//     { name: 'mage', type: 'water', cost: 48 },
//     { name: 'mage', type: 'earth', cost: 56 },
//     { name: 'mage', type: 'fire', cost: 64 },
// ]