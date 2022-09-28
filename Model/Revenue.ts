import {Food} from "./Food";
import {ManageRevenue} from "../Manage/ManageRevenue";

let upID = 1;

export class Revenue {
    id: number;
    day: number;
    month: number;
    year: number;
    hours: number;
    minutes: number;
    listOderFood: Food[] = [];
    totalPayment: number;


    constructor(listOderFood: Food[], totalPayment: number,day: number = new Date().getDay(), month= new Date().getMonth(), year = new Date().getFullYear(), hours = new Date().getHours(), minutes = new Date().getMinutes()) {
        this.id = upID++;
        this.day = day;
        this.month = month;
        this.year = year;
        this.hours = hours;
        this.minutes = minutes;
        this.listOderFood = listOderFood;
        this.totalPayment = totalPayment;
    }

    getTime() {
        let today = new Date();
        let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date + ' ' + time;
    }
}

// let r1 = new Revenue([], 1);
// console.log(r1)