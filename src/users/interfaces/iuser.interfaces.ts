import { Document } from 'mongoose';

export interface IUser extends Document {
    readonly firstName: string;
    readonly lastName: string;
    readonly password: string;
    readonly username: string;
    readonly email: string;
}
