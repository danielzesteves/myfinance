
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {IUser} from './interfaces/iuser.interfaces';
import {CreateUserDTO} from './dto/create-user.dto';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}
  async findAll(): Promise<IUser[]> {
    return this.userModel.find().exec();
  }

  async findOne(firstName: string): Promise<IUser> {
    const resultado = this.userModel.where({firstName}).findOne((err, result) => {
      return result;
    });
    return resultado;
  }
}
