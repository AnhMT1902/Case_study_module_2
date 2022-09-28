import {Food} from "./Food";

let inp = require('readline-sync');

export class Table {
    public nameTable: number;
    public listOderFood: Food[] = [];
    public status: boolean;

    constructor(numberTable: number) {
        this.status = false;
        this.nameTable = numberTable;
    }

    findFoodByName(name: string): number {
        for (let i = 0; i < this.listOderFood.length; i++) {
            if (this.listOderFood[i].name == name) {
                return i;
            }
        }
        return -1;
    }

    oderFoodInTable(food: Food) {
        this.listOderFood.push(food);
    }

    showListOderFood() {
        if (this.status == false) {
            console.log("ban chua co khach!!!!!")
            return false
        } else {
            let showFood: string = ""
            let sumPrice: number = 0;
            this.listOderFood.forEach((item, index) => {
                showFood += `${index + 1} ten mon: ${item.name}, so luong: ${item.amount}, gia: ${item.price}, nguoi oder: ${item.service.useName}\n`
                sumPrice += item.amount * item.price
            })
            console.log(showFood + "tam tinh: " + sumPrice);
            console.log("\x1b[36m1.Sua so luong mon\n" +
                "2. Huy mon" +
                "\x1b[0m");
            return true;
        }
    }

    updateFoodInTable(name: string) {
        let index = this.findFoodByName(name);
        if (index == -1) {
            console.log(`\x1b[34mBan chua oder mon nay!!!!\x1b[0m`)
        } else {
            let newAmount = +inp.question("nhap lai so luong: ");

        }
    }

    pay(): number {
        let payPrice: number = 0;
        this.listOderFood.forEach((item) => {
            payPrice += item.price * item.amount;
        })
        return payPrice;
    }
}