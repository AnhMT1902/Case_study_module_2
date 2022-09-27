"use strict";
exports.__esModule = true;
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(numberTable) {
        this.listOderFood = [];
        this.status = false;
        this.nameTable = numberTable;
    }
    Table.prototype.pay = function () {
        var payPrice = 0;
        this.listOderFood.forEach(function (item) {
            payPrice += item.price;
        });
        return payPrice;
    };
    return Table;
}());
exports.Table = Table;
