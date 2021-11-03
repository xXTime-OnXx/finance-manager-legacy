import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../user/user.entity";

@Entity("pin")
export class PinEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    label: string;

    @Column()
    time: Date;

    @Column({ type: "float" })
    latitude: number;

    @Column({ type: "float" })
    longitude: number;

    @ManyToOne(type => UserEntity, user => user.pins)
    user: UserEntity;
}
