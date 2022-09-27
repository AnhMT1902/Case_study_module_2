"use strict";
exports.__esModule = true;
exports.StaffOder = void 0;
var StaffOder = /** @class */ (function () {
    function StaffOder(id, useName, wage) {
        this._status = false;
        this._workingHours = 0;
        this._id = id;
        this._useName = useName;
        this._wage = wage;
    }
    Object.defineProperty(StaffOder.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StaffOder.prototype, "useName", {
        get: function () {
            return this._useName;
        },
        set: function (value) {
            this._useName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StaffOder.prototype, "wage", {
        get: function () {
            return this._wage;
        },
        set: function (value) {
            this._wage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StaffOder.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    return StaffOder;
}());
exports.StaffOder = StaffOder;
