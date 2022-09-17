export class Food {
    private _name: string;
    private _price: number;
    private _amount: number;

    constructor(name: string, price: number, amount: number) {
        this._name = name;
        this._price = price;
        this._amount = amount;
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