import {UserRole} from "./user-role.enum";

export interface User {
    id: string;
    username: string;
    password: string;
    phone: string;
    role: UserRole;
}
