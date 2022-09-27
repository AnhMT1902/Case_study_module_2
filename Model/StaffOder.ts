// import {Restaurant} from "./Restaurant";
import {Table} from "./Table";
import {Food} from "./Food";
import {createDiffieHellman} from "crypto";

export class StaffOder {
    private _id: number;
    private _useName: string;
    private _wage: number;
    private _status: boolean = false;
    _workingHours: number = 0;
    private _listFood: Food[] = [];


    constructor(id: number, useName: string, wage: number) {
        this._id = id;
        this._useName = useName;
        this._wage = wage;

    }

    // showFoodOder() {
    //     let show: string = ``;
    //     this.listFood.forEach((e) => {
    //         show += `ten mon: ${e.name}, so luong: ${e.amount}, oder: ${e.service._useName}\n`;
    //     })
    // }

    upWorkingHours() {
        this._workingHours += 1;
    }

    // oderFood(index: number, choice: number) {
    //     let amount: number = +inp.question("nhap so luong mon an: ");
    //     let temp: number = 0;
    //     Warehouse.listTable[choice - 1].listOderFood.forEach((item) => {
    //         if (item.name == Warehouse.listFood[index - 1].name) {
    //             temp++;
    //             item.amount += amount;
    //         }
    //     })
    //     if (temp == 0) {
    //         Warehouse.listTable[index - 1].listOderFood.push(Warehouse.listFood[index - 1]);
    //         Warehouse.listTable[choice - 1].listOderFood.forEach((item) => {
    //             if (item.name == Warehouse.listFood[index - 1].name) {
    //                 temp++;
    //                 item.amount = amount;
    //             }
    //         })
    //     }
    //     Warehouse.listFood[index - 1].amount -= amount;
    //     console.log("-----them mon thanh cong-----")
    // }
    //
    // showListFoodOder(index: number) {
    //     Warehouse.listTable[index - 1].listOderFood.forEach((item, index) => {
    //         console.log(`${index + 1}. ten mon: ${item.name}, gia: ${item.price}, so luong: ${item.amount}`)
    //     })
    // }
    //
    // editFoodOder(index: number) {
    //     StaffOder.showFoodOder(index);
    //     let choice: number = inp.question("lua chon cua ban: ");
    //     let amount: number = inp.question("nhap lai so luong");
    //     Warehouse.listTable[index - 1].listOderFood[choice - 1].amount = amount;
    //     Warehouse.listFood.forEach((item) => {
    //         if (item == Warehouse.listTable[index - 1].listOderFood[choice - 1]) {
    //             item.amount -= amount + Warehouse.listTable[index - 1].listOderFood[choice - 1].amount;
    //         }
    //     })
    //     console.log("-----sua thanh cong-----");
    // }
    //
    // static choiceMenuTable() {
    //     console.log("1. Thêm món\n2. Danh sách các món đã oder\n3. Sửa món\n4. Thanh toán\n0. Danh sách bàn");
    // }
    //
    // removeFoodOder(index: number) {
    //     let delName: string = inp.question("nhap ten mon an ban muon xoa");
    //     let temp: number = 0;
    //     Warehouse.listTable[index - 1].listOderFood.forEach((item, index) => {
    //         if (item.name.toUpperCase() == delName.toUpperCase()) {
    //             Warehouse.listFood.forEach((element) => {
    //                 if (element.name == delName) {
    //                     element.amount += item.amount;
    //                 }
    //             })
    //             Warehouse.listTable[index - 1].listOderFood.splice(index, 1);
    //             console.log('-----xoa thanh cong-----')
    //             temp++;
    //         }
    //     })
    //     if (temp == 0) {
    //         console.log(`-----mon an nay chua duoc oder-----`)
    //     }
    // }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get useName(): string {
        return this._useName;
    }

    set useName(value: string) {
        this._useName = value;
    }

    get wage(): number {
        return this._wage;
    }

    set wage(value: number) {
        this._wage = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }

    get listFood(): Food[] {
        return this._listFood;
    }

    set listFood(value: Food[]) {
        this._listFood = value;
    }
}