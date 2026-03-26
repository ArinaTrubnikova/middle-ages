import { Hero } from "../../components/hero/hero";

export interface Cell {
    row: number;
    col: number;
    soldiers: Hero[] | null;
}