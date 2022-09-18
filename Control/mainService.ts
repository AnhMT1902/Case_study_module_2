import {restaurant} from "./mainRestaurant";
import it from "node:test";
// import {Service} from "../Model/Service";
// import {Warehouse} from "../Model/Warehouse";
//
let inp = require('readline-sync')
// let choice: number;
// let serviceMA = new Service(1, "thu");
// restaurant.add(serviceMA);
// function showLogIn() {
//     while (choice != 2) {
//         menuLogin();
//         choice = +inp.question("nhap lua chon cua ban: ");
//         switch (choice) {
//             case 1:
//                 while (choice != 0) {
//                     if (logIn()) {
//                         while (choice != 0) {
//                             console.log("-----chon vi tri ban muon oder-----")
//                             restaurant.showTable();
//                             console.log("0. Đăng xuất");
//                             choice = inp.question("nhap lua chon cua ban: ");
//                             if (choice > 0 && choice <= Warehouse.listTable.length) {
//                                 Service.choiceMenuTable();
//                             } else {
//                                 console.log(`-----Hiện tại chưa có bàn ${choice}-----`)
//                             }
//                         }
//                     } else {
//                         console.log(" Thông tin đăng nhập chưa chính xác \n Vui lòng liên hệ nhà hàng hoặc đăng nhập lại");
//                         break;
//                     }
//                 }
//                 break;
//         }
//     }
// }
//
// showLogIn();
//
// function menuLogin() {
//     console.log("-----Bạn phải đăng nhập-----\n 1. Đăng nhập.\n 2. Thoát ")
// }


// console.log(restaurant.listService);
function logIn() {
    let id: number = inp.question("nhap id cua ban: ");
    let name: string = inp.question("nhap ten cua ban: ");
    restaurant.listService.forEach((item) => {
        if (item.name == name && item.id == id) {
            return true
        }
    })
    return false
}

console.log(logIn());


