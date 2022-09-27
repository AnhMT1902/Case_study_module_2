import {StaffOder} from "../Model/StaffOder";
import {Food} from "../Model/Food";
import {Table} from "../Model/Table";
import it from "node:test";

let inp = require('readline-sync');

export class ManageRestaurant {
    listStaff: StaffOder[] = [];
    listTable: Table[] = [];
    menuFood: Food[] = [];

    addStaff(staff: StaffOder) {
        this.listStaff.push(staff);
    }

    addFood(food: Food) {
        this.menuFood.push(food);
    }

    addTable(table: Table) {
        this.listTable.push(table);
    }

    findStaffByID(id: number): number {
        for (let i = 0; i < this.listStaff.length; i++) {
            if (this.listStaff[i].id == id) {
                return i;
            }
        }
        return -1;
    }

    findFoodByName(name: string): number {
        for (let i = 0; i < this.menuFood.length; i++) {
            if (this.menuFood[i].name == name) {
                return i;
            }
        }
        return -1;
    }

    findTableByID(id: number): number {
        for (let i = 0; i < this.listTable.length; i++) {
            if (this.listTable[i].nameTable == id) {
                return i;
            }
        }
        return -1;
    }

    showTable() {
        this.listTable.forEach((item, index) => {
            console.log(`\x1b[34m${index + 1}. Ban ${item.nameTable}, trang thai: ${item.status}\x1b[0m`)
        })
    }

    showStaff() {
        this.listStaff.forEach((item, index) => {
            console.log(`\x1b[34m${index + 1}. id: ${item.id}, useName: ${item.useName}, trang thai: ${item.status}, luong: ${item.wage}\x1b[0m`)
        })
    }

    showMenu() {
        this.menuFood.forEach((item, index) => {
            console.log(`\x1b[34m${index + 1}. ten mon: ${item.name}, so luong: ${item.amount}, gia: ${item.price}\x1b[0m`)
        })
    }

    updateStaffByID(id: number) {
        let index = this.findStaffByID(id);
        if (index == -1) {
            console.log(`\x1b[34msai id, vui long nhap lai\x1b[0m`)
        } else {
            console.log(`\x1b[34mbo qua neu khong muon thay doi\x1b[0m`);
            let useName: string = inp.question("usename: ");
            let wage: number = +inp.question("luong: ");
            if (useName != "") {
                this.listStaff[index].useName = useName;
            }
            if (wage != 0) {
                this.listStaff[index].wage = wage;
            }
            console.log(`\x1b[34mthay doi thanh cong!!!!\x1b[0m`)
        }
    }

    updateFoodByName(name: string) {
        let index = this.findFoodByName(name);
        if (index == -1) {
            console.log(`\x1b[34msai ten mon an, vui long nhap lai\x1b[0m`)
        } else {
            let price: number = +inp.question("gia moi: ");
            let amount: number = +inp.question("so luong moi: ");
            if (price != 0) this.menuFood[index].price = price;
            if (amount != 0) this.menuFood[index].amount = amount;
        }
    }
}