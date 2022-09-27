import {Food} from "./Food";

export class Table {
    public nameTable: number;
    public listOderFood: Food[] = [];
    status: boolean = false;

    constructor(numberTable: number) {
        this.nameTable = numberTable;
    }

    pay(): number{
        let payPrice: number = 0;
        this.listOderFood.forEach((item)=>{
            payPrice += item.price;
        })
        return payPrice;
    }
}