import {Restaurant} from "./Restaurant";
import {Table} from "./Table";
import {Warehouse} from "./Warehouse";

let inp = require('readline-sync')


export class Service {
    private _id: number;
    private _name: string;

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    oderFood() {
        Restaurant.showListFood();
        let index: number = +inp.question("lua chon cua ban: ")
        let amount: number = +inp.question("nhap so luong mon an: ");
        let temp: number = 0;
        Warehouse.listFood[index -1].amount -= amount;
        Table.listOderFood.forEach((item)=>{
            if (item.name == Warehouse.listFood[index -1].name) {
                temp++;
                item.amount += amount;
            }
        })
        if (temp == 0) {
            Table.listOderFood.push(Warehouse.listFood[index - 1])
        }
        Warehouse.listFood[index - 1].amount -= amount;
        console.log("-----them mon thanh cong-----")
    }

    ShowFoodOder() {
        Table.listOderFood.forEach((item,index)=>{
            console.log(`${index}. ten mon: ${item.name}, gia: ${item.price}, so luong: ${item.amount}`)
        })
    }

    editFoodOder() {
        this.ShowFoodOder();
        let index: number = inp.question("lua chon cua ban: ");
        let amount: number = inp.question("nhap lai so luong");
        Table.listOderFood[index - 1].amount = amount;
        console.log("-----sua thanh cong-----")
    }

    removeFoodOder() {
        let delName: string = inp.question("nhap ten mon an ban muon xoa");
        let temp: number = 0;
        Table.listOderFood.forEach((item, index)=> {
            if (item.name.toUpperCase() == delName.toUpperCase()) {
                Warehouse.listFood.forEach((element)=>{
                    if (element.name == delName) {
                        element.amount += item.amount;
                    }
                })
                Table.listOderFood.splice(index, 1);
                console.log('-----xoa thanh cong-----')
                temp++;
            }
        })
        if (temp == 0) {
            console.log(`-----mon an nay chua duoc oder-----`)
        }
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}