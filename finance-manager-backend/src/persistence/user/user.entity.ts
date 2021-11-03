import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PinEntity} from "../pin/pin.entity";
import {UserRole} from "../../domain/aggregate/user/user-role.enum";

@Entity("user")
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole

    @OneToMany(type => PinEntity, pin => pin.user)
    pins: PinEntity[];
}
