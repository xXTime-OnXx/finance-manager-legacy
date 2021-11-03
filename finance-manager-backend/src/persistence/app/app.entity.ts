import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("app")
export class AppEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: true })
    isActive: boolean;
}
