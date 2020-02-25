import { IUser } from "../interfaces/iuser.interfaces";

export class User implements IUser{
    firstName: string;
    lastName: string;
    password: string;
    access_token: string;

}