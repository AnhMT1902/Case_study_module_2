import {Revenue} from "../Model/Revenue";

export class ManageRevenue {
    static historyRevenue: Revenue[] = [];

    static findRevenueByID(id: number) {
        for (let i = 0; i < ManageRevenue.historyRevenue.length; i++) {
            if (ManageRevenue.historyRevenue[i].id == id) {
                return i;
            }
        }
        return -1;
    }
}