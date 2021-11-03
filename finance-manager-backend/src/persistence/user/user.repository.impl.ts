import {Injectable} from "@nestjs/common";
import {UserRepository} from "../../domain/aggregate/user/user.repository";
import {UserEntity} from "./user.entity";
import {CreateUser} from "../../domain/aggregate/user/create-user.type";

@Injectable()
export class UserRepositoryImpl extends UserRepository {

    async find(username: string): Promise<UserEntity> {
        return await UserEntity.findOne({
            where: {
                username: username
            }
        });
    }

    async create(createUser: CreateUser): Promise<void> {
        const userEntity = new UserEntity();
        userEntity.username = createUser.username;
        userEntity.password = createUser.password;
        userEntity.phone = createUser.phone;
        await userEntity.save();
    }

}
