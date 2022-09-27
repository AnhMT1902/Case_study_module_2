import {StaffOder} from "./StaffOder";
import {Table} from "./Table";

export class Food {
    private _name: string;
    private _price: number;
    private _amount: number;
    service: StaffOder| null;
    table: Table | null;

    constructor(name: string, price: number, amount: number, service: StaffOder | null, table: Table | null) {
        this._name = name;
        this._price = price;
        this._amount = amount;
        this.service = service;
        this.table = table;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }
}