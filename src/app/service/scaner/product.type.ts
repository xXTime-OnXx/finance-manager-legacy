import {Receipt} from "./receipt.type";
import {Reference} from "@angular/fire/firestore";

export interface Product {
    id: string;
    text: string;
    price: number;
    receipt: Reference<Receipt>;
}
