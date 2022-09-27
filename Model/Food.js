"use strict";
exports.__esModule = true;
exports.Food = void 0;
var Food = /** @class */ (function () {
    function Food(name, price, amount, service, table) {
        this._name = name;
        this._price = price;
        this._amount = amount;
        this.service = service;
        this.table = table;
    }
    Object.defineProperty(Food.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Food.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Food.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: false,
        configurable: true
    });
    return Food;
}());
exports.Food = Food;
