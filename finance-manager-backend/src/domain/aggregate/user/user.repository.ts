import {User} from "./user.type";
import {CreateUser} from "./create-user.type";

export abstract class UserRepository {
    async abstract find(username: string): Promise<User>;

    async abstract create(createUser: CreateUser): Promise<void>;
}
