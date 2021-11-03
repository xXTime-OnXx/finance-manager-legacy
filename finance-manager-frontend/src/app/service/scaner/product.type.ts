import {Receipt} from "./receipt.type";
import {Reference} from "@angular/fire/firestore";
import {User} from "../user/user.type";

export interface Product {
    id: string;
    amount: number
    text: string;
    price: number;
    consumer: Reference<User>
    receipt: Reference<Receipt>;
}
