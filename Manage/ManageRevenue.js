"use strict";
exports.__esModule = true;
exports.ManageRevenue = void 0;
var ManageRevenue = /** @class */ (function () {
    function ManageRevenue() {
    }
    ManageRevenue.findRevenueByID = function (id) {
        for (var i = 0; i < ManageRevenue.historyRevenue.length; i++) {
            if (ManageRevenue.historyRevenue[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    ManageRevenue.historyRevenue = [];
    return ManageRevenue;
}());
exports.ManageRevenue = ManageRevenue;
