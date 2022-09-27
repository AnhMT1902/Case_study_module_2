"use strict";
exports.__esModule = true;
//khai bao bien
var Restaurant_1 = require("../Model/Restaurant");
var ManageRestaurant_1 = require("../Manage/ManageRestaurant");
var StaffOder_1 = require("../Model/StaffOder");
var Food_1 = require("../Model/Food");
var Table_1 = require("../Model/Table");
var inp = require('readline-sync');
var choice = "";
var admin = new Restaurant_1.Restaurant();
var staff;
var restaurant = new ManageRestaurant_1.ManageRestaurant();
//bat dau
function main() {
    do {
        console.log("\x1b[36m----------LOG IN----------\n" +
            "1. Dang nhap Quan Ly nha hang\n" +
            "2. Dang nhap Nhan Vien\n" +
            "0. Thoat\x1b[0m");
        choice = inp.question("");
        switch (choice) {
            case "1":
                loginAdmin();
                break;
            case "2":
                loginStaffOder();
                break;
        }
    } while (choice != "0");
}
main();
//dao dien admin
function loginAdmin() {
    while (choice != "0") {
        console.log("\x1b[36m" +
            "1. Dang nhap\n" +
            "2. Dang ky\n" +
            "0. Quay lai\x1b[0m");
        choice = inp.question("");
        switch (choice) {
            case "1":
                var useName = inp.question("ten dang nhap: ");
                var address = inp.question("mat khau: ");
                if (admin.name == useName && admin.address == address) {
                    console.log("\u001B[34mDang nhap thanh cong!!!!\u001B[0m");
                    menuManageRestaurant();
                }
                else
                    console.log("\u001B[34msai thong tin dang nhap, vui long thu lai!!!!\u001B[0m");
                break;
            case "2":
                useName = inp.question("ten dang nhap: ");
                address = inp.question("mat khau: ");
                admin = new Restaurant_1.Restaurant(useName, address);
                console.log("\u001B[34mdang ky thanh cong!!!!\u001B[0m");
                break;
        }
    }
}
//menu Admin
function menuManageRestaurant() {
    do {
        console.log("\x1b[36m----------QUAN LY NHA HANG----------\n" +
            "1. Quan ly nhan vien\n" +
            "2. Menu mon an\n" +
            "3. Quan ly ban\n" +
            "4. Doanh thu cua hang\n" +
            "5. Tinh luong nhan vien\n" +
            "0. Dang xuat\x1b[0m");
        choice = inp.question("");
        switch (choice) {
            case "1":
                manageStaff();
                break;
            case "2":
                manageFood();
                break;
            case "3":
                manageTable();
                break;
            case "4":
                showRestaurantRevenue();
            // viet tiep o day
        }
    } while (choice != "0");
}
// quan ly nhan vien
function manageStaff() {
    do {
        console.log("\x1b[36m----------QUAN LY NHAN VIEN----------\n" +
            "1. Them nhan vien\n" +
            "2. Danh sach nhan vien\n" +
            "3. Tim thong tin nhan vien\n" +
            "4. Chinh sua thong tin nhan vien\n" +
            "5. Xoa nhan vien\n" +
            "0. Quay lai\x1b[0m");
        choice = inp.question("");
        switch (choice) {
            case "1":
                addStaff();
                break;
            case "2":
                showStaff();
                break;
            case "3":
                findStaffByID();
                break;
            case "4":
                updateStaff();
                break;
            case "5":
                removeStaffByID();
                break;
            case "0":
                menuManageRestaurant();
                break;
        }
    } while (choice != "0");
}
function addStaff() {
    var id = +inp.question("id: ");
    if (restaurant.findStaffByID(id) != -1) {
        console.log("\u001B[34mid da ton tai, vui long nhap lai!!!!\u001B[0m");
    }
    else {
        var useName = inp.question("useName: ");
        var wage = inp.question("luong: ");
        restaurant.addStaff(new StaffOder_1.StaffOder(id, useName, wage));
        console.log("\u001B[34mthem thanh cong!!!!\u001B[0m");
    }
}
function showStaff() {
    if (restaurant.listStaff.length == 0)
        console.log("\u001B[34mdanh sach trong!!!!\u001B[0m");
    else
        restaurant.showStaff();
}
function findStaffByID() {
    var id = +inp.question("id can tim: ");
    var index = restaurant.findStaffByID(id);
    if (index != -1)
        console.log(restaurant.listStaff[index]);
    else
        console.log("\u001B[34mkhong tim thay thong tin, vui long nhap lai!!!!\u001B[0m");
}
function updateStaff() {
    var id = +inp.question("vui long nhap id: ");
    restaurant.updateStaffByID(id);
}
function removeStaffByID() {
    var id = +inp.question("vui long nhap id: ");
    var index = restaurant.findStaffByID(id);
    if (index == -1)
        console.log("\x1b[34mid khong dung vui long nhap lai!!!!\x1b[0m");
    else {
        console.log("Ban co chac chan muon xoa?\n" +
            "1. Co\n" +
            "2. Huy");
        choice = inp.question("");
        switch (choice) {
            case "1":
                restaurant.listStaff.splice(index, 1);
                console.log("\u001B[34mxoa thanh cong!!!!\u001B[0m");
                break;
            case "2":
                console.log("\u001B[34mda huy!!!!\u001B[0m");
                break;
        }
    }
}
//quan ly do an
function manageFood() {
    do {
        console.log("\x1b[36m----------QUAN LY MON AN----------\n" +
            "1. Them mon\n" +
            "2. Hien thi danh sach mon an\n" +
            "3. Tim thong tin mon an\n" +
            "4. Chinh sua thong tin mon an\n" +
            "5. Xoa mon\n" +
            "0. Quay lai\x1b[0m");
        choice = inp.question("");
        switch (choice) {
            case "1":
                addFood();
                break;
            case "2":
                showFood();
                break;
            case "3":
                findFoodByName();
                break;
            case "4":
                updateFood();
                break;
            case "5":
                removeFoodByName();
                break;
            case "0":
                menuManageRestaurant();
                break;
        }
    } while (choice != "0");
}
function addFood() {
    var name = inp.question("ten mon: ");
    var amount = +inp.question("so luong: ");
    var price = +inp.question("gia: ");
    var index = restaurant.findFoodByName(name);
    if (index != -1) {
        restaurant.menuFood[index].amount += amount;
        console.log("\u001B[34mthem thanh cong!!!!\u001B[0m");
    }
    else {
        restaurant.addFood(new Food_1.Food(name, price, amount, null, null));
        console.log("\u001B[34mthem thanh cong!!!!\u001B[0m");
    }
}
function showFood() {
    if (restaurant.menuFood.length == 0)
        console.log("\u001B[34mdanh sach trong!!!!\u001B[0m");
    else
        restaurant.showMenu();
}
function findFoodByName() {
    var name = inp.question("ten mon can tim: ");
    var res = restaurant.menuFood.filter(function (item) { return item.name.toUpperCase().includes(name.toUpperCase()); });
    if (res.length == 0) {
        console.log("\u001B[34mkhong tim thay, vui long nhap lai!!!!\u001B[0m");
    }
    else
        res.forEach(function (item, index) {
            console.log("\u001B[34m".concat(index + 1, ". ten mon: ").concat(item.name, ", so luong: ").concat(item.amount, ", gia: ").concat(item.price, "\u001B[0m"));
        });
}
function updateFood() {
    var name = inp.question("vui long nhap ten mon an: ");
    restaurant.updateFoodByName(name);
}
function removeFoodByName() {
    var name = inp.question("nhap ten mon an ban muon xoa: ");
    var index = restaurant.findFoodByName(name);
    if (index == -1) {
        console.log("\x1b[34mten khong dung vui long nhap lai!!!!\x1b[0m");
    }
    else {
        console.log("Ban co chac chan muon xoa?\n" +
            "1. Co\n" +
            "2. Huy");
        choice = inp.question("");
        switch (choice) {
            case "1":
                restaurant.menuFood.splice(index, 1);
                console.log("\u001B[34mxoa thanh cong!!!!\u001B[0m");
                break;
            case "2":
                console.log("\u001B[34mda huy!!!!\u001B[0m");
                break;
        }
    }
}
//quan ly ban
function manageTable() {
    do {
        console.log("\x1b[36m----------QUAN LY BAN----------\n" +
            "1. Them ban\n" +
            "2. Hien thi danh sach ban\n" +
            "3. Hien thi danh sach ban con trong\n" +
            "4. Xoa ban\n" +
            "0. Quay lai\x1b[0m");
        choice = inp.question("");
        switch (choice) {
            case "1":
                addTable();
                break;
            case "2":
                showTable();
                break;
            case "3":
                showTableIsEmpty();
                break;
            case "5":
                removeTableByName();
                break;
            case "0":
                menuManageRestaurant();
                break;
        }
    } while (choice != "0");
}
function addTable() {
    var number = +inp.question("nhap so ban: ");
    if (restaurant.findTableByID(number) != -1) {
        console.log("\u001B[34mban ".concat(number, " da ton tai, vui long nhap lai!!!!\u001B[0m"));
    }
    else {
        restaurant.addTable(new Table_1.Table(number));
        console.log("\u001B[34mthem thanh cong!!!!\u001B[0m");
    }
}
function showTable() {
    if (restaurant.listTable.length == 0) {
        console.log("\u001B[34mdanh sach trong\u001B[0m");
    }
    else
        restaurant.showTable();
}
function showTableIsEmpty() {
    var res = restaurant.listTable.filter(function (item) { return (item.status == false); });
    res.forEach(function (item, index) {
        console.log("\u001B[34m".concat(index + 1, ". Ban ").concat(item.nameTable, ", trang thai: ").concat(item.status, "\u001B[0m"));
    });
}
function removeTableByName() {
    var name = +inp.question("vui long nhap ten ban: ");
    var index = restaurant.findTableByID(name);
    if (index == -1) {
        console.log("\x1b[34mten ban khong dung vui long nhap lai!!!!\x1b[0m");
    }
    else {
        console.log("Ban co chac chan muon xoa?\n" +
            "1. Co\n" +
            "2. Huy");
        choice = inp.question("");
        switch (choice) {
            case "1":
                restaurant.listTable.splice(index, 1);
                console.log("\u001B[34mxoa thanh cong!!!!\u001B[0m");
                break;
            case "2":
                console.log("\u001B[34mda huy!!!!\u001B[0m");
                break;
        }
    }
}
function loginStaffOder() {
}
function showRestaurantRevenue() {
    do {
        console.log("\x1b[34m----------DOANH SO NHA HANG----------\n" +
            "1. Ngay hom nay\n" +
            "2. 10 ngay qua\n" +
            "3. Chon thang\n" +
            "0. Quay lai\x1b[0m");
        choice = inp.question("");
        switch (choice) {
            case "1":
                break;
            case "2":
                break;
            case "3":
                break;
            case "0":
                menuManageRestaurant();
                break;
        }
    } while (choice != "0");
}
