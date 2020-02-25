import { IUser } from '../interfaces/iuser.interfaces';

export class User implements IUser {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    access_token: string;

    toPlain(): any {
        return 'HOLA';
    }
}
