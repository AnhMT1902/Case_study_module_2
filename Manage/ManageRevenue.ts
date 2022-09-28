import {Revenue} from "../Model/Revenue";
import it from "node:test";
import {Food} from "../Model/Food";

export class ManageRevenue {
    historyRevenue: Revenue[] = [];

    constructor() {
        this.historyRevenue.push(new Revenue([new Food("pho", 35000, 10, null, null), new Food("lau", 35000, 10, null, null), new Food("bia", 35000, 10, null, null)], 1, 28, 9, 2022));
        this.historyRevenue.push(new Revenue([new Food("pho", 35000, 20, null, null), new Food("lau", 35000, 10, null, null), new Food("bia", 35000, 10, null, null)], 1, 26, 9, 2022));
        this.historyRevenue.push(new Revenue([new Food("pho", 35000, 30, null, null), new Food("lau", 35000, 10, null, null), new Food("bia", 35000, 10, null, null)], 1, 25, 9, 2022));
        this.historyRevenue.push(new Revenue([new Food("pho", 35000, 20, null, null), new Food("lau", 35000, 10, null, null), new Food("bia", 35000, 10, null, null)], 1, 14, 9, 2022));
        this.historyRevenue.push(new Revenue([new Food("pho", 35000, 10, null, null), new Food("lau", 35000, 10, null, null), new Food("bia", 35000, 10, null, null)], 1, 11, 9, 2022));
        this.historyRevenue.push(new Revenue([new Food("pho", 35000, 30, null, null), new Food("lau", 35000, 10, null, null), new Food("bia", 35000, 10, null, null)], 1, 12, 9, 2022));
        this.historyRevenue.push(new Revenue([new Food("pho", 35000, 20, null, null), new Food("lau", 35000, 10, null, null), new Food("bia", 35000, 10, null, null)], 1, 21, 9, 2022));
        this.historyRevenue.push(new Revenue([new Food("pho", 35000, 50, null, null), new Food("lau", 35000, 10, null, null), new Food("bia", 35000, 10, null, null)], 1, 2, 9, 2022));
        this.historyRevenue.push(new Revenue([new Food("pho", 35000, 30, null, null), new Food("lau", 35000, 10, null, null), new Food("bia", 35000, 10, null, null)], 1, 3, 9, 2022));
        this.historyRevenue.push(new Revenue([new Food("pho", 35000, 2, null, null), new Food("lau", 35000, 10, null, null), new Food("bia", 35000, 10, null, null)], 1, 18, 9, 2022));
        this.historyRevenue.push(new Revenue([new Food("pho", 35000, 3, null, null), new Food("lau", 35000, 10, null, null), new Food("bia", 35000, 10, null, null)], 1, 17, 9, 2022));
        this.historyRevenue.push(new Revenue([new Food("pho", 35000, 1, null, null), new Food("lau", 35000, 10, null, null), new Food("bia", 35000, 10, null, null)], 1, 1, 9, 2022));
    }

    findRevenueByID(id: number) {
        for (let i = 0; i < this.historyRevenue.length; i++) {
            if (this.historyRevenue[i].id == id) {
                return i;
            }
        }
        return -1;
    }

    findRevenueById(id: number) {
        for (let i = 0; i < this.historyRevenue.length; i++) {
            if (this.historyRevenue[i].id == id) {
                return i;
            }
        }
        return -1;
    }

    showRevenueById(id: number) {
        let index = this.findRevenueById(id);
        if (index == -1) {
            console.log("khong tim thay thong tin hoa don !!!!")
        } else {
            this.showFood(this.historyRevenue[index])
        }
    }

    todayRevenue() {
        for (let i = 0; i < this.historyRevenue.length; i++) {
            if (this.historyRevenue[i].day == this.getDate()) {
                this.showRevenue(this.historyRevenue[i])
            }
        }
    }

    tenDayRevenue() {
        let temp = this.getDate() - 10;
        for (let i = 0; i < this.historyRevenue.length; i++) {
            if (this.historyRevenue[i].day > temp && this.historyRevenue[i].day <= this.getDate()) {
                this.showRevenue(this.historyRevenue[i])
            }
        }
    }

    monthRevenue() {
        this.historyRevenue.forEach((item) => {
            if (item.month == this.getMonth()) {
                this.showRevenue(item);
            }
        })

        for (let i = 0; i < this.historyRevenue.length; i++) {
            if (this.historyRevenue[i].month == this.getMonth()) {
                this.showRevenue(this.historyRevenue[i]);
            }
        }
    }

    getDate(): number {
        let date = new Date().getDate()
        return +date;
    }

    getMonth(): number {
        let month = new Date().getMonth();
        return +month
    }

    showFood(revenue: Revenue) {
        let food = ""
        let sumPrime = 0;
        revenue.listOderFood.forEach((item) => {
            food += `ten mon: ${item.name}, sl: ${item.amount}, don gia: ${item.price}, T.Tien: ${item.amount * item.price}\n`
            sumPrime += item.amount * item.price;
        })
        return food + "\nTong cong:" + sumPrime;
    }

    showRevenue(revenue: Revenue) {
        console.log("" +
            "\x1b[34m" +
            "---------------------PHO MAI---------------------\n" +
            "_________________________________________________\n" +
            "                PHIEU THANH TOAN\n" +
            "thoi gian: " + `${revenue.day}/${revenue.month}/${revenue.year} ${revenue.hours}:${revenue.minutes}` + "\n" +
            "_________________________________________________\n" +
            this.showFood(revenue) + "\n" +
            "_________________________________________________\n" +
            "                    Thank you!       \x1b[0m")
    }
}

let htr = new ManageRevenue();
htr.todayRevenue();