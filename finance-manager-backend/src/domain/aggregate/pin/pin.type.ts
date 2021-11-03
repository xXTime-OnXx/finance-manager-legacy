import {User} from "../user/user.type";

export interface Pin {
    id: string;
    label: string;
    time: Date;
    longitude: number;
    latitude: number;
    user: User;
}
