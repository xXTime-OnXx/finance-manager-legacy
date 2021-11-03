import {Injectable} from '@nestjs/common';
import {UserRepository} from "../../aggregate/user/user.repository";
import {CreateUser} from "../../aggregate/user/create-user.type";

@Injectable()
export class UserManager {

    constructor(private userRepository: UserRepository) {
    }

    public async register(createUser: CreateUser): Promise<void> {
        return await this.userRepository.create(createUser)
    }
}
