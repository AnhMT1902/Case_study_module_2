import {Food} from "./Food";
import {StaffOder} from "./StaffOder";
import {Table} from "./Table";

export class Restaurant {
    private _name: string;
    private _address: string;
    private _listService: StaffOder[] = [];

    constructor(name: string = "phoMai", address: string = "c4") {
        this._name = name;
        this._address = address;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get listService(): StaffOder[] {
        return this._listService;
    }

    set listService(value: StaffOder[]) {
        this._listService = value;
    }
}