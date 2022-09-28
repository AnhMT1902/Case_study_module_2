"use strict";
exports.__esModule = true;
exports.Table = void 0;
var inp = require('readline-sync');
var Table = /** @class */ (function () {
    function Table(numberTable) {
        this.listOderFood = [];
        this.status = false;
        this.nameTable = numberTable;
    }
    Table.prototype.findFoodByName = function (name) {
        for (var i = 0; i < this.listOderFood.length; i++) {
            if (this.listOderFood[i].name == name) {
                return i;
            }
        }
        return -1;
    };
    Table.prototype.oderFoodInTable = function (food) {
        this.listOderFood.push(food);
    };
    Table.prototype.showListOderFood = function () {
        if (this.status == false) {
            console.log("ban chua co khach!!!!!");
            return false;
        }
        else {
            var showFood_1 = "";
            var sumPrice_1 = 0;
            this.listOderFood.forEach(function (item, index) {
                showFood_1 += "".concat(index + 1, " ten mon: ").concat(item.name, ", so luong: ").concat(item.amount, ", gia: ").concat(item.price, ", nguoi oder: ").concat(item.service.useName, "\n");
                sumPrice_1 += item.amount * item.price;
            });
            console.log(showFood_1 + "tam tinh: " + sumPrice_1);
            console.log("\x1b[36m1.Sua so luong mon\n" +
                "2. Huy mon" +
                "\x1b[0m");
            return true;
        }
    };
    Table.prototype.updateFoodInTable = function (name) {
        var index = this.findFoodByName(name);
        if (index == -1) {
            console.log("\u001B[34mBan chua oder mon nay!!!!\u001B[0m");
        }
        else {
            var newAmount = +inp.question("nhap lai so luong: ");
        }
    };
    Table.prototype.pay = function () {
        var payPrice = 0;
        this.listOderFood.forEach(function (item) {
            payPrice += item.price * item.amount;
        });
        return payPrice;
    };
    return Table;
}());
exports.Table = Table;
