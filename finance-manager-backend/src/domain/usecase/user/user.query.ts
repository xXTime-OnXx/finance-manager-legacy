import {Injectable} from '@nestjs/common';
import {User} from "../../aggregate/user/user.type";
import {UserRepository} from "../../aggregate/user/user.repository";

@Injectable()
export class UserQuery {

    constructor(private userRepository: UserRepository) {
    }

    public async find(username: string): Promise<User> {
        return await this.userRepository.find(username);
    }
}
