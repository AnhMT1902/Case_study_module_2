"use strict";
exports.__esModule = true;
exports.Revenue = void 0;
var upID = 1;
var Revenue = /** @class */ (function () {
    function Revenue(listOderFood, totalPayment, day, month, year, hours, minutes) {
        if (day === void 0) { day = new Date().getDay(); }
        if (month === void 0) { month = new Date().getMonth(); }
        if (year === void 0) { year = new Date().getFullYear(); }
        if (hours === void 0) { hours = new Date().getHours(); }
        if (minutes === void 0) { minutes = new Date().getMinutes(); }
        this.listOderFood = [];
        this.id = upID++;
        this.day = day;
        this.month = month;
        this.year = year;
        this.hours = hours;
        this.minutes = minutes;
        this.listOderFood = listOderFood;
        this.totalPayment = totalPayment;
    }
    Revenue.prototype.getTime = function () {
        var today = new Date();
        var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date + ' ' + time;
    };
    return Revenue;
}());
exports.Revenue = Revenue;
// let r1 = new Revenue([], 1);
// console.log(r1)
