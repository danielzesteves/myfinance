import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/classes/user.classes';
import { IUser } from 'src/users/interfaces/iuser.interfaces';
@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<IUser> {
        const user: User = await this.usersService.findOne({ username, password: pass });
        console.log(user instanceof User);
        return user;
      }

      async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          payload,
          access_token: this.jwtService.sign(payload),
        };
      }
}
