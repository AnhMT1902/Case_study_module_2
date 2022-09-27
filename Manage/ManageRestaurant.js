"use strict";
exports.__esModule = true;
exports.ManageRestaurant = void 0;
var StaffOder_1 = require("../Model/StaffOder");
var Food_1 = require("../Model/Food");
var Table_1 = require("../Model/Table");
var inp = require('readline-sync');
var ManageRestaurant = /** @class */ (function () {
    function ManageRestaurant() {
        this.listStaff = [];
        this.listTable = [];
        this.menuFood = [];
        this.addStaff(new StaffOder_1.StaffOder(1, "1", 1));
        this.addFood(new Food_1.Food("pho", 35000, 50, null, null));
        this.addFood(new Food_1.Food("lau", 35000, 50, null, null));
        this.addFood(new Food_1.Food("bia", 35000, 50, null, null));
        this.addTable(new Table_1.Table(1));
        this.addTable(new Table_1.Table(2));
        this.addTable(new Table_1.Table(3));
        this.addTable(new Table_1.Table(4));
        this.addTable(new Table_1.Table(5));
    }
    ManageRestaurant.prototype.addStaff = function (staff) {
        this.listStaff.push(staff);
    };
    ManageRestaurant.prototype.addFood = function (food) {
        this.menuFood.push(food);
    };
    ManageRestaurant.prototype.addTable = function (table) {
        this.listTable.push(table);
    };
    ManageRestaurant.prototype.findStaffByID = function (id) {
        for (var i = 0; i < this.listStaff.length; i++) {
            if (this.listStaff[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    ManageRestaurant.prototype.findFoodByName = function (name) {
        for (var i = 0; i < this.menuFood.length; i++) {
            if (this.menuFood[i].name == name) {
                return i;
            }
        }
        return -1;
    };
    ManageRestaurant.prototype.findTableByID = function (id) {
        for (var i = 0; i < this.listTable.length; i++) {
            if (this.listTable[i].nameTable == id) {
                return i;
            }
        }
        return -1;
    };
    ManageRestaurant.prototype.showTable = function () {
        this.listTable.forEach(function (item, index) {
            console.log("\u001B[34m".concat(index + 1, ". Ban ").concat(item.nameTable, ", trang thai: ").concat(item.status, "\u001B[0m"));
        });
    };
    ManageRestaurant.prototype.showStaff = function () {
        this.listStaff.forEach(function (item, index) {
            console.log("\u001B[34m".concat(index + 1, ". id: ").concat(item.id, ", useName: ").concat(item.useName, ", trang thai: ").concat(item.status, ", luong: ").concat(item.wage, "\u001B[0m"));
        });
    };
    ManageRestaurant.prototype.showMenu = function () {
        this.menuFood.forEach(function (item, index) {
            console.log("\u001B[34m".concat(index + 1, ". ten mon: ").concat(item.name, ", so luong: ").concat(item.amount, ", gia: ").concat(item.price, "\u001B[0m"));
        });
    };
    ManageRestaurant.prototype.updateStaffByID = function (id) {
        var index = this.findStaffByID(id);
        if (index == -1) {
            console.log("\u001B[34msai id, vui long nhap lai\u001B[0m");
        }
        else {
            console.log("\u001B[34mbo qua neu khong muon thay doi\u001B[0m");
            var useName = inp.question("usename: ");
            var wage = +inp.question("luong: ");
            if (useName != "") {
                this.listStaff[index].useName = useName;
            }
            if (wage != 0) {
                this.listStaff[index].wage = wage;
            }
            console.log("\u001B[34mthay doi thanh cong!!!!\u001B[0m");
        }
    };
    ManageRestaurant.prototype.updateFoodByName = function (name) {
        var index = this.findFoodByName(name);
        if (index == -1) {
            console.log("\u001B[34msai ten mon an, vui long nhap lai\u001B[0m");
        }
        else {
            var price = +inp.question("gia moi: ");
            var amount = +inp.question("so luong moi: ");
            if (price != 0)
                this.menuFood[index].price = price;
            if (amount != 0)
                this.menuFood[index].amount = amount;
        }
    };
    return ManageRestaurant;
}());
exports.ManageRestaurant = ManageRestaurant;
