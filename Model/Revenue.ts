import {Food} from "./Food";
import {ManageRevenue} from "../Manage/ManageRevenue";

let upID = 1;

export class Revenue {
    id: number = 0;
    date: string;
    listOderFood: Food[] = [];
    totalPayment: number;


    constructor(listOderFood: Food[], totalPayment: number) {
        this.id = upID++;
        this.date = this.getDate();
        this.listOderFood = listOderFood;
        this.totalPayment = totalPayment;
    }

    getDate() {
        let today = new Date();
        let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date + ' ' + time;
    }

    printReceipt() {

    }
}
let r1 = new Revenue([], 1);
console.log(r1)