
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {IUser} from './interfaces/iuser.interfaces';
import {CreateUserDTO} from './dto/create-user.dto';
import { Model } from 'mongoose';
import { User } from './classes/user.classes';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}
  async findAll(): Promise<IUser[]> {
    return this.userModel.find().exec();
  }

  async findOne({ username, password }: { username: string; password: string; }): Promise<User> {
    return this.userModel.findOne({username, password})
                        .select('_id firstName lastName email username')
                        .then((result) =>  {
      const user: User = result._doc;
      return user;
    });
  }
}
