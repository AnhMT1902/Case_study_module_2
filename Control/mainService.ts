import {restaurant} from "./mainRestaurant";

let inp = require('readline-sync')
let choice: number;

function showLogIn() {
    while (choice != 2) {
        menuLogin();
        choice = +inp.question("nhap lua chon cua ban: ");
        switch (choice) {
            case 1:
                while (choice != 0) {
                    if (logIn()) {
                        managerTable();
                        console.log("0. Đăng xuất")
                        choice = inp.question("nhap lua chon cua ban: ");
                        if (choice == 0) {
                            showLogIn();
                        }
                    } else {
                        console.log(" Thông tin đăng nhập chưa chính xác \n vui lòng liên hệ nhà hàng hoặc đăng nhập lại");
                        break;
                    }
                }
                break;
        }
    }
}

showLogIn();

function menuLogin() {
    console.log("-----Bạn phải đăng nhập-----\n 1. Đăng nhập.\n 2. Thoát ")
}

function logIn() {
    let name = inp.question("nhap ten cua ban: ");
    let id = +inp.question("nhap id cua ban: ");
    restaurant.listService.forEach((item) => {
        if (item.id == id && item.name == name) {
            return true;
        }
    })
    return false;
}

function managerTable() {
    restaurant.showTable();
}