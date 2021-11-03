import {Injectable} from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {UserQuery} from "../../domain/usecase/user/user.query";

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private userQuery: UserQuery) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userQuery.find(username);
        if (user && user.password === pass) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, uid: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
