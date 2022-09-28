"use strict";
exports.__esModule = true;
exports.ManageRevenue = void 0;
var Revenue_1 = require("../Model/Revenue");
var Food_1 = require("../Model/Food");
var ManageRevenue = /** @class */ (function () {
    function ManageRevenue() {
        this.historyRevenue = [];
        this.historyRevenue.push(new Revenue_1.Revenue([new Food_1.Food("pho", 35000, 10, null, null), new Food_1.Food("lau", 35000, 10, null, null), new Food_1.Food("bia", 35000, 10, null, null)], 1, 28, 9, 2022));
        this.historyRevenue.push(new Revenue_1.Revenue([new Food_1.Food("pho", 35000, 20, null, null), new Food_1.Food("lau", 35000, 10, null, null), new Food_1.Food("bia", 35000, 10, null, null)], 1, 26, 9, 2022));
        this.historyRevenue.push(new Revenue_1.Revenue([new Food_1.Food("pho", 35000, 30, null, null), new Food_1.Food("lau", 35000, 10, null, null), new Food_1.Food("bia", 35000, 10, null, null)], 1, 25, 9, 2022));
        this.historyRevenue.push(new Revenue_1.Revenue([new Food_1.Food("pho", 35000, 20, null, null), new Food_1.Food("lau", 35000, 10, null, null), new Food_1.Food("bia", 35000, 10, null, null)], 1, 24, 9, 2022));
        this.historyRevenue.push(new Revenue_1.Revenue([new Food_1.Food("pho", 35000, 10, null, null), new Food_1.Food("lau", 35000, 10, null, null), new Food_1.Food("bia", 35000, 10, null, null)], 1, 23, 9, 2022));
        this.historyRevenue.push(new Revenue_1.Revenue([new Food_1.Food("pho", 35000, 30, null, null), new Food_1.Food("lau", 35000, 10, null, null), new Food_1.Food("bia", 35000, 10, null, null)], 1, 22, 9, 2022));
        this.historyRevenue.push(new Revenue_1.Revenue([new Food_1.Food("pho", 35000, 20, null, null), new Food_1.Food("lau", 35000, 10, null, null), new Food_1.Food("bia", 35000, 10, null, null)], 1, 21, 9, 2022));
        this.historyRevenue.push(new Revenue_1.Revenue([new Food_1.Food("pho", 35000, 50, null, null), new Food_1.Food("lau", 35000, 10, null, null), new Food_1.Food("bia", 35000, 10, null, null)], 1, 20, 9, 2022));
        this.historyRevenue.push(new Revenue_1.Revenue([new Food_1.Food("pho", 35000, 30, null, null), new Food_1.Food("lau", 35000, 10, null, null), new Food_1.Food("bia", 35000, 10, null, null)], 1, 19, 9, 2022));
        this.historyRevenue.push(new Revenue_1.Revenue([new Food_1.Food("pho", 35000, 2, null, null), new Food_1.Food("lau", 35000, 10, null, null), new Food_1.Food("bia", 35000, 10, null, null)], 1, 18, 9, 2022));
        this.historyRevenue.push(new Revenue_1.Revenue([new Food_1.Food("pho", 35000, 3, null, null), new Food_1.Food("lau", 35000, 10, null, null), new Food_1.Food("bia", 35000, 10, null, null)], 1, 17, 9, 2022));
        this.historyRevenue.push(new Revenue_1.Revenue([new Food_1.Food("pho", 35000, 1, null, null), new Food_1.Food("lau", 35000, 10, null, null), new Food_1.Food("bia", 35000, 10, null, null)], 1, 1, 9, 2022));
    }
    ManageRevenue.prototype.findRevenueByID = function (id) {
        for (var i = 0; i < this.historyRevenue.length; i++) {
            if (this.historyRevenue[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    ManageRevenue.prototype.findRevenueById = function (id) {
        for (var i = 0; i < this.historyRevenue.length; i++) {
            if (this.historyRevenue[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    ManageRevenue.prototype.showRevenueById = function (id) {
        var index = this.findRevenueById(id);
        if (index == -1) {
            console.log("khong tim thay thong tin hoa don !!!!");
        }
        else {
            this.showFood(this.historyRevenue[index]);
        }
    };
    ManageRevenue.prototype.todayRevenue = function () {
        for (var i = 0; i < this.historyRevenue.length; i++) {
            if (this.historyRevenue[i].day == this.getDate()) {
                this.showRevenue(this.historyRevenue[i]);
            }
        }
    };
    ManageRevenue.prototype.tenDayRevenue = function () {
        var temp = this.getDate() - 10;
        for (var i = 0; i < this.historyRevenue.length; i++) {
            if (this.historyRevenue[i].day > temp && this.historyRevenue[i].day <= this.getDate()) {
                this.showRevenue(this.historyRevenue[i]);
            }
        }
    };
    ManageRevenue.prototype.monthRevenue = function () {
        var _this = this;
        this.historyRevenue.forEach(function (item) {
            if (item.month == _this.getMonth()) {
                _this.showRevenue(item);
            }
        });
        for (var i = 0; i < this.historyRevenue.length; i++) {
            if (this.historyRevenue[i].month == this.getMonth()) {
                this.showRevenue(this.historyRevenue[i]);
            }
        }
    };
    ManageRevenue.prototype.getDate = function () {
        var date = new Date().getDate();
        return +date;
    };
    ManageRevenue.prototype.getMonth = function () {
        var month = new Date().getMonth();
        return +month;
    };
    ManageRevenue.prototype.showFood = function (revenue) {
        var food = "";
        var sumPrime = 0;
        revenue.listOderFood.forEach(function (item) {
            food += "ten mon: ".concat(item.name, ", sl: ").concat(item.amount, ", don gia: ").concat(item.price, ", T.Tien: ").concat(item.amount * item.price, "\n");
            sumPrime += item.amount * item.price;
        });
        return food + "\nTong cong:" + sumPrime;
    };
    ManageRevenue.prototype.showRevenue = function (revenue) {
        console.log("" +
            "\x1b[34m" +
            "---------------------PHO MAI---------------------\n" +
            "_________________________________________________\n" +
            "                PHIEU THANH TOAN\n" +
            "thoi gian: " + "".concat(revenue.day, "/").concat(revenue.month, "/").concat(revenue.year, " ").concat(revenue.hours, ":").concat(revenue.minutes) + "\n" +
            "_________________________________________________\n" +
            this.showFood(revenue) + "\n" +
            "_________________________________________________\n" +
            "                    Thank you!       \x1b[0m");
    };
    return ManageRevenue;
}());
exports.ManageRevenue = ManageRevenue;
var htr = new ManageRevenue();
htr.todayRevenue();
