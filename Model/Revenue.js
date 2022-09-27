"use strict";
exports.__esModule = true;
exports.Revenue = void 0;
var upID = 1;
var Revenue = /** @class */ (function () {
    function Revenue(listOderFood, totalPayment) {
        this.id = 0;
        this.listOderFood = [];
        this.id = upID++;
        this.date = this.getDate();
        this.listOderFood = listOderFood;
        this.totalPayment = totalPayment;
    }
    Revenue.prototype.getDate = function () {
        var today = new Date();
        var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date + ' ' + time;
    };
    Revenue.prototype.printReceipt = function () {
    };
    return Revenue;
}());
exports.Revenue = Revenue;
var r1 = new Revenue([], 1);
console.log(r1);
