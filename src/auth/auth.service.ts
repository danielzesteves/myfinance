import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/classes/user.classes';
@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<User> {
        const user = await this.usersService.findOne(username);
        console.log(user);
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return user;
        }
        return null;
      }

      async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          payload,
          access_token: this.jwtService.sign(payload),
        };
      }
}
