
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import {CreateUserDTO} from './dto/create-user.dto';
import { Model } from 'mongoose';
import { User } from './classes/user.classes';
@Injectable()
export class UsersService {
  private readonly users: User[];
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(firstName: string): Promise<User> {
    const resultado = this.userModel.where({firstName}).findOne((err, result) =>{
      return result;
    });
    return resultado;
  }
}
