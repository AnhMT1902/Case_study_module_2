"use strict";
exports.__esModule = true;
exports.Restaurant = void 0;
var Restaurant = /** @class */ (function () {
    function Restaurant(name, address) {
        if (name === void 0) { name = "phoMai"; }
        if (address === void 0) { address = "c4"; }
        this._listService = [];
        this._name = name;
        this._address = address;
    }
    Object.defineProperty(Restaurant.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "listService", {
        get: function () {
            return this._listService;
        },
        set: function (value) {
            this._listService = value;
        },
        enumerable: false,
        configurable: true
    });
    return Restaurant;
}());
exports.Restaurant = Restaurant;
