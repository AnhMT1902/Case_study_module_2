import {Restaurant} from "../Model/Restaurant";
import {ManageRestaurant} from "../Manage/ManageRestaurant";
import {StaffOder} from "../Model/StaffOder";
import {Food} from "../Model/Food";
import {Table} from "../Model/Table";
import {Revenue} from "../Model/Revenue";
import {ManageRevenue} from "../Manage/ManageRevenue";

//khai bao bien
let inp = require('readline-sync');
let choice: string = "";
let admin = new Restaurant();
let staff: StaffOder;
let restaurant = new ManageRestaurant();
let nameTable: number;
let useName;
let address;
let table: Table;
let manageRevenue = new ManageRevenue();

//bat dau
console.log(manageRevenue)
function main() {
    do {
        console.log("\x1b[36m----------LOG IN----------\n" +
            "1. Dang nhap Quan Ly nha hang\n" +
            "2. Dang nhap Nhan Vien\n" +
            "0. Thoat\x1b[0m");
        choice = inp.question("")
        switch (choice) {
            case "1":
                loginAdmin();
                break;
            case "2":
                loginStaffOder();
                break;
        }
    } while (choice != "0")
}

main();

//dao dien login admin
function loginAdmin() {
    while (choice != "0") {
        console.log("\x1b[36m" +
            "1. Dang nhap\n" +
            "2. Dang ky\n" +
            "0. Quay lai\x1b[0m")
        choice = inp.question("");
        switch (choice) {
            case "1":
                useName = inp.question("ten dang nhap: ");
                address = inp.question("mat khau: ");
                if (admin.name == useName && admin.address == address) {
                    console.log(`\x1b[34mDang nhap thanh cong!!!!\x1b[0m`)
                    menuManageRestaurant();
                } else console.log(`\x1b[34msai thong tin dang nhap, vui long thu lai!!!!\x1b[0m`)
                break;
            case "2":
                console.log(`\x1b[34mten dang nhap va mat khau khong duoc de trong!!!!\x1b[0m`)
                useName = inp.question("ten dang nhap: ");
                address = inp.question("mat khau: ");
                if (useName.length > 0 && address.length > 0) {
                    admin = new Restaurant(useName, address);
                    console.log(`\x1b[34mdang ky thanh cong!!!!\x1b[0m`)
                } else {
                    console.log(`\x1b[34mten dang nhap hoac mat khau khong dung dinh dang\x1b[0m`);
                    console.log(`\x1b[34mDang ky that bai!!!!\x1b[0m`)
                }
                break;
            case "0":
                main();
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
                showRestaurantRevenueOnDay();
                break;
            case "0":
                main();
                break;

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
    } while (choice != "0")
}

function addStaff() {
    let id = +inp.question("id: ");
    if (restaurant.findStaffByID(id) != -1) {
        console.log(`\x1b[34mid da ton tai, vui long nhap lai!!!!\x1b[0m`);
    } else {
        let useName = inp.question("useName: ");
        let wage = inp.question("luong: ");
        restaurant.addStaff(new StaffOder(id, useName, wage));
        console.log(`\x1b[34mthem thanh cong!!!!\x1b[0m`);
    }
}

function showStaff() {
    if (restaurant.listStaff.length == 0) console.log(`\x1b[34mdanh sach trong!!!!\x1b[0m`)
    else restaurant.showStaff();
}

function findStaffByID() {
    let id = +inp.question("id can tim: ");
    let index = restaurant.findStaffByID(id);
    if (index != -1) console.log(restaurant.listStaff[index]);
    else console.log(`\x1b[34mkhong tim thay thong tin, vui long nhap lai!!!!\x1b[0m`)
}

function updateStaff() {
    let id = +inp.question("vui long nhap id: ")
    restaurant.updateStaffByID(id)
}

function removeStaffByID() {
    let id = +inp.question("vui long nhap id: ");
    let index = restaurant.findStaffByID(id);
    if (index == -1) console.log("\x1b[34mid khong dung vui long nhap lai!!!!\x1b[0m");
    else {
        console.log("Ban co chac chan muon xoa?\n" +
            "1. Co\n" +
            "2. Huy")
        choice = inp.question("");
        switch (choice) {
            case "1":
                restaurant.listStaff.splice(index, 1);
                console.log(`\x1b[34mxoa thanh cong!!!!\x1b[0m`)
                break;
            case "2":
                console.log(`\x1b[34mda huy!!!!\x1b[0m`);
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
    } while (choice != "0")
}

function addFood() {
    let name: string = inp.question("ten mon: ");
    let amount = +inp.question("so luong: ");
    let price = +inp.question("gia: ");
    let index = restaurant.findFoodByName(name);
    if (index != -1) {
        restaurant.menuFood[index].amount += amount;
        console.log(`\x1b[34mthem thanh cong!!!!\x1b[0m`);
    } else {
        restaurant.addFood(new Food(name, price, amount, null, null));
        console.log(`\x1b[34mthem thanh cong!!!!\x1b[0m`);
    }
}

function showFood() {
    if (restaurant.menuFood.length == 0) console.log(`\x1b[34mdanh sach trong!!!!\x1b[0m`)
    else restaurant.showMenu();
}

function findFoodByName() {
    let name = inp.question("ten mon can tim: ");
    let res = restaurant.menuFood.filter(item => item.name.toUpperCase().includes(name.toUpperCase()));
    if (res.length == 0) {
        console.log(`\x1b[34mkhong tim thay, vui long nhap lai!!!!\x1b[0m`);
    } else res.forEach((item, index) => {
        console.log(`\x1b[34m${index + 1}. ten mon: ${item.name}, so luong: ${item.amount}, gia: ${item.price}\x1b[0m`)
    })
}

function updateFood() {
    let name = inp.question("vui long nhap ten mon an: ")
    restaurant.updateFoodByName(name);
}

function removeFoodByName() {
    let name = inp.question("nhap ten mon an ban muon xoa: ");
    let index: number = restaurant.findFoodByName(name);
    if (index == -1) {
        console.log("\x1b[34mten khong dung vui long nhap lai!!!!\x1b[0m");
    } else {
        console.log("Ban co chac chan muon xoa?\n" +
            "1. Co\n" +
            "2. Huy")
        choice = inp.question("");
        switch (choice) {
            case "1":
                restaurant.menuFood.splice(index, 1);
                console.log(`\x1b[34mxoa thanh cong!!!!\x1b[0m`)
                break;
            case "2":
                console.log(`\x1b[34mda huy!!!!\x1b[0m`);
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
    } while (choice != "0")
}

function addTable() {
    let number = +inp.question("nhap so ban: ");
    if (restaurant.findTableByID(number) != -1) {
        console.log(`\x1b[34mban ${number} da ton tai, vui long nhap lai!!!!\x1b[0m`);
    } else {
        restaurant.addTable(new Table(number));
        console.log(`\x1b[34mthem thanh cong!!!!\x1b[0m`);
    }
}

function showTable() {
    if (restaurant.listTable.length == 0) {
        console.log(`\x1b[34mdanh sach trong\x1b[0m`)
    } else restaurant.showTable();
}

function showTableIsEmpty() {
    let res = restaurant.listTable.filter(item => (item.status == false))
    if (res.length == 0) console.log(`\x1b[34mHien tai khong con ban trong!!!!\x1b[0m`)
    else {
        res.forEach((item, index) => {
            console.log(`\x1b[34m${index + 1}. Ban ${item.nameTable}, trang thai: ${item.status}\x1b[0m`)
        })
    }

}

function removeTableByName() {
    let name = +inp.question("vui long nhap ten ban: ");
    let index: number = restaurant.findTableByID(name);
    if (index == -1) {
        console.log("\x1b[34mten ban khong dung vui long nhap lai!!!!\x1b[0m");
    } else {
        console.log("Ban co chac chan muon xoa?\n" +
            "1. Co\n" +
            "2. Huy")
        choice = inp.question("");
        switch (choice) {
            case "1":
                restaurant.listTable.splice(index, 1);
                console.log(`\x1b[34mxoa thanh cong!!!!\x1b[0m`)
                break;
            case "2":
                console.log(`\x1b[34mda huy!!!!\x1b[0m`);
                break;
        }
    }
}

//doanh so ban hang
function showRestaurantRevenueOnDay() {
    do {
        console.log("\x1b[36m----------DOANH SO NHA HANG----------\n" +
            "1. Ngay hom nay\n" +
            "2. 10 ngay qua\n" +
            "3. Chon thang\n" +
            "0. Quay lai\x1b[0m");
        choice = inp.question("");
        switch (choice) {
            case "1":
                manageRevenue.todayRevenue();
                break;
            case "2":
                manageRevenue.tenDayRevenue();
                break;
            case "3":
                manageRevenue.monthRevenue();
                break;
            case "0":
                menuManageRestaurant();
                break;
        }
    } while (choice != "0")
}

// dao dien logIn Staff
function loginStaffOder() {
    let id = +inp.question("vui long nhap id: ");
    let useName = inp.question("nhap ten dang nhap: ");
    let index = restaurant.findStaffByID(id);
    if (index == -1) {
        console.log(`\x1b[34msai thong tin dang nhap, vui long lien he nha hang de duoc cap lai!!!!\x1b[0m`)
    } else if (restaurant.listStaff[index].useName == useName) {
        //dang nhap thanh cong
        staff = restaurant.listStaff[index];
        manageOder();
    } else {
        console.log(`\x1b[34msai thong tin dang nhap, vui long lien he nha hang de duoc cap lai!!!!\x1b[0m`)
    }
}

//menu StaffOder
function manageOder() {
    do {
        console.log("\x1b[36m----------CHAO MUNG BAN DEN VOI BINH NGUYEN VO TAN----------\n" +
            "1. Danh sach ban\n" +
            "2. Danh sach ban con trong\n" +
            "3. Chon ban\n" +
            "0. Dang xuat khoi trai dat\x1b[0m")
        choice = inp.question("");
        switch (choice) {
            case "1":
                console.log(`\x1b[36m----------DANH SACH BAN----------\x1b[0m`)
                showTable();
                break;
            case "2":
                console.log(`\x1b[36m----------DANH SACH BAN CON TRONG----------\x1b[0m`)
                showTableIsEmpty();
                break;
            case "3":
                choiceByNameTable();
                break;
            case "0":
                main();
                break;
        }

    } while (choice != "0")
}

// hien thi danh sach ban => chon
function choiceByNameTable() {
    nameTable = +inp.question("so ban: ");
    let index = restaurant.findTableByID(nameTable);

    if (index == -1) {
        console.log(`\x1b[34msai so ban, vui long nhap lai!!!!\x1b[0m`)
    } else {
        table = restaurant.listTable[index]
        oderFoodInTable(table)
    }
}

//oder do an trong ban
function oderFoodInTable(table: Table) {
    do {
        showMenuTable(table);
    } while (choice != "0")
}

//menu ban
function showMenuTable(table: Table) {
    console.log("\x1b[36m----------ban so " + table.nameTable + "----------\n" +
        "1. Oder\n" +
        "2. Thong tin ban " + table.nameTable + "\n" +
        "3. Thanh toan\n" +
        "0. Quay lai\x1b[0m"
    )
    choice = inp.question("");
    switch (choice) {
        case "1":
            oderFood(table);
            break;
        case "2":
            showInForTable(table);
            break;
        case "3":
            payCash(table);
            break;
        case "0":
            manageOder();
            break;
    }
}

//oder do an
function oderFood(table: Table) {
    console.log(`\x1b[34m-----------DANH SACH MON AN----------\x1b[0m`)
    showFood();
    console.log(`\x1b[34m0. Quay lai\x1b[0m`);
    choice = inp.question("");
    let food: Food = restaurant.menuFood[+choice - 1];
    if (choice != "0") {
        if (+choice > restaurant.menuFood.length) {
            console.log(`\x1b[34msai so thu tu, vui long nhap lai!!!!\x1b[0m`)
        } else {
            let amount = +inp.question("so luong: ");
            if (amount > food.amount) {
                console.log(`\x1b[34mqua so luong, vui long nhap lai!!!!\x1b[0m`)
            } else if (amount > 0) {
                food.amount -= amount;
                let index = table.findFoodByName(food.name);
                if (index == -1) {
                    table.oderFoodInTable(new Food(food.name, food.price, amount, staff, table));
                } else table.listOderFood[index].amount += amount;
                table.status = true;
                console.log(`\x1b[34mthem thanh cong!!!!\x1b[0m`);
                showMenuTable(table);
            } else {
                console.log(`\x1b[34mvui long nhap lai so luong!!!!\x1b[0m`)
            }
        }
    } else showMenuTable(table);
}

//hien thi thong tin ban
function showInForTable(table: Table) {
    do {
        console.log(`\x1b[34m----------thong tin ban ${table.nameTable}----------\x1b[0m`)
        if (table.showListOderFood() == false) {
            break;
        } else {
            console.log(`\x1b[36m0. Quay lai\x1b[0m`);
            choice = inp.question("");
            switch (choice) {
                case "1":
                    updateAmountFood(table);
                    break;
                case "2":
                    cancelFood(table);
                    break;
                case "0":
                    showMenuTable(table);
                    break;
            }
        }
    } while (choice != "0")
}

//huy mon
function cancelFood(table: Table) {
    let name: string = inp.question("nhap ten mon can huy: ")
    let index = table.findFoodByName(name);
    if (index == -1) {
        console.log(`\x1b[34mmon nay cua duoc oder!!!!\x1b[0m`)
    } else {
        restaurant.menuFood[restaurant.findFoodByName(name)].amount += table.listOderFood[index].amount;
        table.listOderFood.splice(index, 1);
        console.log(`\x1b[34mhuy thanh cong!!!!\x1b[0m`);
    }
}

// thay doi so luong
function updateAmountFood(table) {
    let name: string = inp.question("nhap ten mon can sua: ")
    let index = table.findFoodByName(name);
    if (index == -1) {
        console.log(`\x1b[34mmon nay chua duoc oder!!!!\x1b[0m`)
    } else {
        let amount = +inp.question("vui long nhap lai so luong: ")
        restaurant.menuFood[restaurant.findFoodByName(name)].amount += table.listOderFood[index].amount - amount;
        table.listOderFood[index].amount = amount;
        console.log(`\x1b[34mda sua thanh cong!!!!\x1b[0m`);
    }
}

//thanh toan
function payCash(table: Table) {
    let listOder = table.listOderFood;
    let revenue = new Revenue(listOder, table.pay());
    showRevenue(revenue);
    console.log("\x1b[34m ban co chac chan muon thanh toan?\n" +
        "1. Dong y\n" +
        "0. Quay lai\x1b[0m");
    choice = inp.question("");
    if (choice == "1") {
        manageRevenue.historyRevenue.push(revenue);
        console.log(manageRevenue.historyRevenue)
        table.listOderFood = [];
        table.status = false;
        console.log(`\x1b[34m----------THANH TOAN THANH CONG----------\x1b[0m`);
        manageOder()
    }
}

function showRevenue(revenue: Revenue) {
    console.log("" +
        "\x1b[34m" +
        "---------------------PHO MAI---------------------\n" +
        "_________________________________________________\n" +
        "                PHIEU THANH TOAN\n" +
        "thoi gian: " + `${revenue.day}/${revenue.month}/${revenue.year} ${revenue.hours}:${revenue.minutes}` + "\n" +
        "_________________________________________________\n" +
        showListFood(revenue) + "\n" +
        "_________________________________________________\n" +
        "                    Thank you!       \x1b[0m")
}

function showListFood(revenue: Revenue) {
    let food: string = ""
    let sumPrime = 0;
    revenue.listOderFood.forEach((item) => {
        food += `ten mon: ${item.name}, sl: ${item.amount}, don gia: ${item.price}, T.Tien: ${item.amount * item.price}\n`
        sumPrime += item.amount * item.price;
    })
    return food + "\nTong cong:" + sumPrime;
}

// doanh số nhà hàng