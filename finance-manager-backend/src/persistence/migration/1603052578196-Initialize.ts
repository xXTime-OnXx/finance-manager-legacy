import {MigrationInterface, QueryRunner} from "typeorm";
import {UserEntity} from "../user/user.entity";
import {PinEntity} from "../pin/pin.entity";
import {UserRole} from "../../domain/aggregate/user/user-role.enum";

export class Initialize1603052578196 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const userEntity = new UserEntity();
        userEntity.username = 'timon';
        userEntity.password = 'timon'
        userEntity.phone = '+41785270924';
        userEntity.role = UserRole.USER;
        const user =  await userEntity.save();

        const pinEntity = new PinEntity();
        pinEntity.label = 'Filou & Bangel';
        pinEntity.time = new Date();
        pinEntity.latitude = 47.048958;
        pinEntity.longitude = 8.308406;
        pinEntity.user = user;
        await pinEntity.save();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
