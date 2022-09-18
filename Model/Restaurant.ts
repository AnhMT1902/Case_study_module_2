import {Food} from "./Food";
import {Service} from "./Service";
import {Table} from "./Table";
import {Warehouse} from "./Warehouse";
import it from "node:test";

let inp = require('readline-sync');

export class Restaurant {
    private name: string;
    private address: string;
    listService: Service[] = [];

    constructor(name: string, address: string) {
        this.addFiveFood();
        this.addOneService();
        this.addFiveTable();
        this.name = name;
        this.address = address;
    }

    addFood() {
        let name: string = inp.question("nhap ten mon: ");
        let price: number = +inp.question("nhap gia mon: ");
        let amount: number = +inp.question("so luong mon: ");
        let temp = 0;
        Warehouse.listFood.forEach((item) => {
            if (item.name.toUpperCase() == name.toUpperCase()) {
                item.amount += amount;
                temp++;
            }
        })
        if (temp == 0) {
            Warehouse.listFood.push(new Food(name, price, amount));
        }
        console.log("-----them thanh cong-----")
    }

    static showListFood() {
        Warehouse.listFood.forEach((item, index) => {
            console.log(`${index + 1}. ten mon: ${item.name}, gia mon: ${item.price}, so luong: ${item.amount}`)
        })
    }

    addFiveFood() {
        Warehouse.listFood.push(new Food("pho tai", 40000, 45));
        Warehouse.listFood.push(new Food("pho chin", 40000, 45));
        Warehouse.listFood.push(new Food("pho tai chin", 40000, 45));
        Warehouse.listFood.push(new Food("pho tai gau", 40000, 45));
    }

    editFood() {
        Restaurant.showListFood();
        console.log("-----bỏ trống nếu không muốn thay đổi-----");
        let index = +inp.question("lua chon cua ban: ")
        let newName = inp.question("ten moi: ");
        let newPrice = +inp.question("gia moi: ");
        let newAmount = +inp.question("so luong: ");
        if (newName != "") Warehouse.listFood[index - 1].name = newName;
        if (newPrice != 0) Warehouse.listFood[index - 1].price = newPrice;
        if (newAmount != 0) Warehouse.listFood[index - 1].amount = newAmount;
        console.log("-----sua thanh cong-----");
    }

    addTable() {
        let nameTable = inp.question("ten ban moi");
        let temp: number = 0;
        Warehouse.listTable.forEach((item) => {
            if (item.nameTable == nameTable) {
                temp++;
                console.log(`${nameTable} da ton tai`)
            }
        })
        if (temp == 0) {
            Warehouse.listTable.push(new Table(nameTable));
            console.log("----them thanh cong----")
        }

    }

    //oder
    showTable() {
        Warehouse.listTable.forEach((item, index) => {
            console.log(`${index + 1}. ${item.nameTable}`)
        })
    }

    addFiveTable() {
        Warehouse.listTable.push(new Table("ban 1"));
        Warehouse.listTable.push(new Table("ban 2"));
        Warehouse.listTable.push(new Table("ban 3"));
        Warehouse.listTable.push(new Table("ban 4"));
        Warehouse.listTable.push(new Table("ban 5"));
    }

    // quản lý nhân viên
    add(service: Service) {
        this.listService.push(service);
    }
    addService() {
        let id: number = +inp.question("nhap id");
        let name: string = inp.question("nhap ten nhan vien");
        this.listService.push(new Service(id, name));
    }

    showListService() {
        this.listService.forEach((item, index) => {
            console.log(`${index + 1}. tên: ${item.name}, id: ${item.id}`)
        })
    }

    removeServiceByID(id: number) {
        let temp: number = 0
        this.listService.forEach((item, index) => {
            if (item.id == id) {
                temp++;
                this.listService.splice(index, 1);
            }
        })
        if (temp == 0) {
            console.log("-----id khong ton tai-----")
        }
    }

    addOneService() {
        this.listService.push(new Service(1, "minh anh"))
    }

}