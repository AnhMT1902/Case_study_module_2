// import {Restaurant} from "./Restaurant";
import {Table} from "./Table";
import {Food} from "./Food";
import {createDiffieHellman} from "crypto";

export class StaffOder {
    private _id: number;
    private _useName: string;
    private _wage: number;
    private _status: boolean = false;
    _workingHours: number = 0;

    constructor(id: number, useName: string, wage: number) {
        this._id = id;
        this._useName = useName;
        this._wage = wage;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get useName(): string {
        return this._useName;
    }

    set useName(value: string) {
        this._useName = value;
    }

    get wage(): number {
        return this._wage;
    }

    set wage(value: number) {
        this._wage = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }
}