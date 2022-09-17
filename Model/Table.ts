import {Food} from "./Food";

export class Table {
    private _nameTable: string;
    static listOderFood: Food[] = [];

    constructor(numberTable: string) {
        this._nameTable = numberTable;
    }

    pay(): number{
        let payPrice: number = 0;
        Table.listOderFood.forEach((item)=>{
            payPrice += item.price;
        })
        return payPrice;
    }

    get nameTable(): string{
        return this._nameTable;
    }

    set nameTable(value: string) {
        this._nameTable = value;
    }
}