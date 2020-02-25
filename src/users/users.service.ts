
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interfaces';
import {CreateUserDTO} from './dto/create-user.dto';
import { Model } from 'mongoose';
@Injectable()
export class UsersService {
  private readonly users: User[];
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(username: string): Promise<User> {
    return this.userModel.find().exe();
  }
}
