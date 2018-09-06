import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    public isConnected: boolean;
    public connectedUser: string;

    constructor() {
        if (localStorage.getItem("isConnected") === "true") {
            this.isConnected = true;
            this.connectedUser = localStorage.getItem("connectedUser");
        } else {
            this.isConnected = false;
            this.connectedUser = undefined;
        }
    }

    public login(user: string): void {
        localStorage.setItem("isConnected", "true");
        localStorage.setItem("connectedUser", user);
        this.isConnected = true;
        this.connectedUser = user;
    }

    public logout(): void {
        localStorage.setItem("isConnected", "false");
        localStorage.setItem("connectedUser", undefined);
        this.isConnected = false;
        this.connectedUser = undefined;
    }
}